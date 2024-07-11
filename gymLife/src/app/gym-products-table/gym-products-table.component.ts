import { Component, OnInit } from '@angular/core';
import { GymProduct } from './gym_products';  // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-gym-products-table',
  templateUrl: './gym-products-table.component.html',
  styleUrls: ['./gym-products-table.component.scss']  // Corrige styleUrls en plural
})
export class GymProductsTableComponent implements OnInit {
  membresias: GymProduct[] = [
    {
      id: 1,
      nombre: 'Membresía Básica',
      descripcion: 'Acceso a gimnasio y clases grupales',
      precio: '30',
      stock: 50,
      imagenUrl: 'assets/img/basica.jpeg',
      clearance: true,
      cantidad: 0,
    },
    {
      id: 2,
      nombre: 'Membresía Premium',
      descripcion: 'Acceso a gimnasio, clases grupales, y áreas exclusivas',
      precio: '50',
      stock: 30,
      imagenUrl: 'assets/img/premium.jpeg',
      clearance: true,
      cantidad: 0,
    }
  ];

  clases: GymProduct[] = [
    {
      id: 3,
      nombre: 'Yoga',
      descripcion: 'Clase de yoga para todos los niveles',
      precio: '10',
      stock: 20,
      imagenUrl: 'assets/img/yog.jpeg',
      clearance: false,
      cantidad: 0,
    },
    {
      id: 4,
      nombre: 'Pilates',
      descripcion: 'Clase de pilates para todos los niveles',
      precio: '10',
      stock: 15,
      imagenUrl: 'assets/img/pilates.jpeg',
      clearance: false,
      cantidad: 0,
    }
  ];

  productos: GymProduct[] = [
    {
      id: 5,
      nombre: 'Proteína en Polvo',
      descripcion: 'Suplemento de proteína para el desarrollo muscular',
      precio: '20',
      stock: 100,
      imagenUrl: 'assets/img/proteinaEnPolvo.jpeg',
      clearance: true,
      cantidad: 0,
    },
    {
      id: 6,
      nombre: 'Botella de Agua',
      descripcion: 'Botella de agua reutilizable',
      precio: '10',
      stock: 200,
      imagenUrl: 'assets/img/botella.jpeg',
      clearance: false,
      cantidad: 0,
    }
  ];

  servicios: GymProduct[] = [
    {
      id: 7,
      nombre: 'Entrenamiento Personal',
      descripcion: 'Sesiones individuales con un entrenador personal',
      precio: '40',
      stock: 10,
      imagenUrl: 'assets/img/entrenadorPersonal.jpeg',
      clearance: false,
      cantidad: 0,
    },
    {
      id: 8,
      nombre: 'Masaje Deportivo',
      descripcion: 'Masaje para recuperación muscular',
      precio: '60',
      stock: 5,
      imagenUrl: 'assets/img/masaje.jpeg',
      clearance: false,
      cantidad: 0,
    },
    {
      id: 9,
      nombre: 'Evaluación Nutricional',
      descripcion: 'Consulta con un nutricionista',
      precio: '50',
      stock: 8,
      imagenUrl: 'assets/img/nutricional.jpeg',
      clearance: false,
      cantidad: 0,
    }
  ];

  accesorios: GymProduct[] = [
    {
      id: 10,
      nombre: 'Toalla de Gimnasio',
      descripcion: 'Toalla de gimnasio absorbente',
      precio: '$15',
      stock: 150,
      imagenUrl: 'assets/img/toallaDeGimnasio.jpeg',
      clearance: false,
      cantidad: 0,
    }
  ];

  ngOnInit() {
    // No necesitamos hacer nada en ngOnInit en este caso
  }
  trackById(index: number, item: GymProduct): number {
    return item.id;
  }
  onCantidadChange(nuevaCantidad: number, producto: GymProduct) {
    producto.cantidad = nuevaCantidad;
  }
}
