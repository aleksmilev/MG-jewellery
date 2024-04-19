import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
    selector: 'app-custom-part',
    templateUrl: './custom-part.component.html',
    styleUrl: './custom-part.component.css'
})
export class CustomPartComponent {
	@ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;
	public scene!: THREE.Scene;
	public camera!: THREE.PerspectiveCamera;
	public renderer!: THREE.WebGLRenderer;
	public dimensions: any;
	private model!: THREE.Object3D;
	private mouseDown: boolean = false;
	private prevMouseX: number = 0;
	private prevMouseY: number = 0;
	private model_rotation: any = { x: 0, y: 0 };

	// Inputs

    @Input({ required: true }) module_path!: string;
	
	@Input({ required: true }) colors!: { name: string, color: string }[];

	@Input({ required: true }) custom_parts!: { name: string, config: { name: string, title: string, selected: boolean }[] }[];

	@Input({ required: true }) selected_layer!: string;

	// Default Functions 

	public update_custom_part(event: any, custom_part: string) {
		this.model_rotation = {
			x: this.model.rotation.x,
			y: this.model.rotation.y
		};

		this.custom_parts = this.custom_parts.map(layer => {
			if (layer.name === custom_part) {
				layer.config = layer.config.map(config => {
					if (config.name === event.target.value) {
						config.selected = true;
					} else {
						config.selected = false;
					}
					return config;
				});
			}
			return layer;
		});

		const rendererContainerElement = this.rendererContainer.nativeElement;
		while (rendererContainerElement.firstChild) {
		  	rendererContainerElement.removeChild(rendererContainerElement.firstChild);
		}

		this.initThree(this.colors, this.module_path, this.model_rotation);
	}

	public get_custom_part() {
		return this.custom_parts.map(part => ({
			...part,
			config: part.config.filter(item => item.selected)
		}));
	}

	// Default Functions 

	ngOnInit(): void {
		const module_width = 80;
		this.dimensions = {
			height: module_width,
			width: module_width
		}
		this.initThree(this.colors, this.module_path, this.model_rotation);
	}

	private initThree(colors: {name: string, color: string}[], module: string, rotation: any) {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0xF5F5F5);
		
		const ambientLight = new THREE.AmbientLight(0x808080, 0.3)
		this.scene.add(ambientLight);
		
		const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight.position.set(1, 1, 1);
		this.scene.add(directionalLight);

		this.configureCamera();
		this.configureRenderer();
		this.loadModel(colors,module, rotation);
		
		const animate = () => {
			requestAnimationFrame(animate);
			this.renderer.render(this.scene, this.camera);
		};
		animate();
	}

	private loadModel(colors: {name: string, color: string}[], module: string, rotation: any) {
		const loader = new GLTFLoader();
		loader.load(module, (gltf) => {
			this.model = gltf.scene;

			this.model.position.set(0, -3.5, 3);
			this.model.scale.set(1, 1, 1);

			this.model.rotateX(rotation.x);
			this.model.rotateY(rotation.y);
			
			gltf.scene.traverse((child) => {
				if (child instanceof THREE.Mesh) {

					const meshData = colors.find((data: any) => data.name === child.name);
					if (meshData) {
						const colorHex = parseInt(meshData.color, 16);
						child.material = new THREE.MeshPhongMaterial({ color: colorHex });
					}
				}

				console.log(child);
			});

			console.log(gltf);

			this.model.children = this.model.children.filter(child => {
				return child.name === this.selected_layer;
			});

			this.scene.add(this.model);
		}, undefined, (error) => {
			console.error('Error loading GLTF:', error);
		});
	}

	private configureCamera() {
		this.camera = new THREE.PerspectiveCamera(75, this.dimensions.width / this.dimensions.height, 0.1, 1000);
		this.camera.position.set(0, 0, 5);
	}

	private configureRenderer() {
		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.setSize(this.dimensions.width, this.dimensions.height);
		this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
	}
}
