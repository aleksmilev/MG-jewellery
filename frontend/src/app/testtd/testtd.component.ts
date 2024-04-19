import { Component, ComponentFactoryResolver, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


@Component({
  selector: 'app-testtd',
  templateUrl: './testtd.component.html',
  styleUrls: ['./testtd.component.css']
})
export class TesttdComponent implements OnInit {

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

	constructor(
	){
	}

	ngOnInit(): void {
		const module_width = Number.parseInt(this.rendererContainer.nativeElement.offsetWidth);
		this.dimensions = {
			height: module_width * 0.7,
			width: module_width
		}
		this.initThree(this.colors, this.module_path, this.model_rotation);
	}

	colors: any[] = [
		{
			"name":"Sphere",
			"color":"6290bf"
		},
		{
			"name":"Torus",
			"color":"6290bf"
		},
		{
			"name":"var_1_0",
			"color":"ff00ff"
		},
		{
			"name":"var_1_1",
			"color":"ff00ff"
		},
		{
			"name":"var_1_2",
			"color":"ff00ff"
		},
		{
			"name":"var_1_3",
			"color":"ff00ff"
		},
		{
			"name":"var_1_4",
			"color":"ff00ff"
		}
		,
		{
			"name":"var_1_4",
			"color":"ff00ff"
		}
	];
	module_path: string = `/assets/test/ring_shader_pos1.gltf`;
	custom_parts = [
		{
			name: 'var_1',
			config: [
				{
					"name":"var_1_0",
					"selected": true
				},
				{
					"name":"var_1_1",
					"selected": false
				},
				{
					"name":"var_1_2",
					"selected": false
				},
				{
					"name":"var_1_3",
					"selected": false
				}
			]
		}
	];

	set_custom_part(event: any, custom_part: string) {

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
		
		console.log(this.model.children);
	}

	private loadModel(colors: {name: string, color: string}[], module: string, rotation: any) {
		const loader = new GLTFLoader();
		loader.load(module, (gltf) => {
			this.model = gltf.scene;

			this.model.position.set(0, -0.5, -1);
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

			this.custom_parts.forEach((custom_part: any) => {
				this.model.children = this.model.children.filter(child => {
					const selectedObj = custom_part.config.find((obj: any) => obj.name === child.name);
					return !selectedObj || selectedObj.selected;
				});
			});

			this.scene.add(this.model);
		}, undefined, (error) => {
			console.error('Error loading GLTF:', error);
		});
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
}
