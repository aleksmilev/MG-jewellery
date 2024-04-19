import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { ApiService } from '../../../api/api.service';
import { Observable } from 'rxjs';
import { Product } from '../../../api/interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services_pipes/products.service';

@Component({
    selector: 'app-single-product',
    templateUrl: './single-product.component.html',
    styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit{
    module_url: string = '/assets/ring_shader_pos1.gltf';
	
    @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;
    public scene!: THREE.Scene;
    public camera!: THREE.PerspectiveCamera;
    public renderer!: THREE.WebGLRenderer;
    public dimensions: any;
    private model!: THREE.Object3D;
    private mouseDown: boolean = false;
    private prevMouseX: number = 0;
    private prevMouseY: number = 0;
  
	constructor(
		private http: ApiService,
		private activated_route: ActivatedRoute,
		private router: Router,
		private products: ProductsService
	){
		this.page_id();
	}

	page_id(): number{ 
		const page_url = this.activated_route.snapshot.paramMap.get('id') || '1';
		const regex = /^[0-9]+$/;

		if(!regex.test(page_url) || parseInt(page_url) <= 0){
			this.router.navigateByUrl('/');
		}

		return parseInt(page_url);
	}

	product_info : Observable<Product[]> = this.http.Get('/items/product', {id: this.page_id()});
	info: Product | undefined;

    ngOnInit(): void {
		const module_width = Number.parseInt(this.rendererContainer.nativeElement.offsetWidth);
      	this.dimensions = {
      	  	height: module_width * 0.7,
      	  	width: module_width
      	}
	  

		this.product_info.subscribe(data => {
			this.info = data[0];
			
			type material = {
				name: string;
				color: string
			};

			const colors: material[] = JSON.parse(data[0].mesh_material);
			const module: string = `/assets/product/${data[0].id}/${data[0].module_path}`;

			this.initThree(colors, module);
		})
    }

	private loadModel(colors: {name: string, color: string}[], module: string) {
		const loader = new GLTFLoader();
		loader.load(module, (gltf) => {
			this.model = gltf.scene;
	
			this.model.position.set(0, -0.5, -1);
			this.model.scale.set(1, 1, 1);
	
			console.log(colors);

			gltf.scene.traverse((child) => {
					if (child instanceof THREE.Mesh) {

						const meshData = colors.find((data: any) => data.name === child.name);
						if (meshData) {
							const colorHex = parseInt(meshData.color, 16);
							child.material = new THREE.MeshPhongMaterial({ color: colorHex });
						}
						
						console.log(child);
					}
			});
		this.scene.add(this.model);
		}, undefined, (error) => {
			console.error('Error loading GLTF:', error);
		});

  	}
  
  	private initThree(colors: {name: string, color: string}[], module: string) {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0xF5F5F5);
	  
		const ambientLight = new THREE.AmbientLight(0x808080, 0.3)
		this.scene.add(ambientLight);
	  
		const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight.position.set(1, 1, 1);
		this.scene.add(directionalLight);

		this.configureCamera();
		this.configureRenderer();
		this.loadModel(colors,module);
	  
		const animate = () => {
			requestAnimationFrame(animate);
	
			if (this.mouseDown) {
				const mouseX = this.getMouseX();
				const mouseY = this.getMouseY();
				const deltaX = mouseX - this.prevMouseX;
				const deltaY = mouseY - this.prevMouseY;
				this.model.rotation.y += deltaX * 0.01;
				this.model.rotation.x += deltaY * 0.01;
				this.prevMouseX = mouseX;
				this.prevMouseY = mouseY;
			}

	 	this.renderer.render(this.scene, this.camera);
		};
		animate();
  	}
  
    private configureCamera() {
      	this.camera = new THREE.PerspectiveCamera(75, this.dimensions.width / this.dimensions.height, 0.1, 1000);
      	this.camera.position.set(0, 0, 5);
    }
  
    private configureRenderer() {
      	this.renderer = new THREE.WebGLRenderer({ antialias: true });
      	this.renderer.setSize(this.dimensions.width, this.dimensions.height);
      	this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
		
      	this.renderer.domElement.addEventListener('mousedown', this.onMouseDown.bind(this));
      	this.renderer.domElement.addEventListener('mouseup', this.onMouseUp.bind(this));
      	this.renderer.domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
    }
  
    private onMouseDown(event: MouseEvent) {
      	this.mouseDown = true;
      	this.prevMouseX = this.getMouseX(event);
      	this.prevMouseY = this.getMouseY(event);
    }
  
    private onMouseUp() {
      	this.mouseDown = false;
    }
  
    private onMouseMove(event: MouseEvent) {
		if (this.mouseDown) {
			const mouseX = this.getMouseX(event);
			const mouseY = this.getMouseY(event);
			const deltaX = mouseX - this.prevMouseX;
			const deltaY = mouseY - this.prevMouseY;
			this.model.rotation.y += deltaX * 0.01;
			this.model.rotation.x += deltaY * 0.01;
			this.prevMouseX = mouseX;
			this.prevMouseY = mouseY;
		}
    }
  
    private getMouseX(event?: MouseEvent): number {
		if (event) {
			return event.clientX;
		} else {
			return this.prevMouseX;
		}
    }
  
    private getMouseY(event?: MouseEvent): number {
	    if (event) {
			return event.clientY;
		} else {
			return this.prevMouseY;
		}
    }

	succesfuly_added: string = "";
	add_to_card(id: number | string = 0){ 
		this.products.add_to_cart(id.toString());

		this.succesfuly_added = "Успешно добавихте този продукт в количката.";
		setTimeout(() => {
			this.succesfuly_added = "";
		}, 2000);
	}
	add_to_liked(id: number | string = 0){ 
		this.products.add_to_liked_products(id.toString()); 

		this.succesfuly_added = "Успешно добавихте този продукт в любими.";
		setTimeout(() => {
			this.succesfuly_added = "";
		}, 2000);
	}
}
