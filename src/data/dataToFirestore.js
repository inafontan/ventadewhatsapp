import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, getDoc, setDoc, doc, addDoc} from 'firebase/firestore/lite'

// Completar con las credenciales de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDVz7oW9Bl159kelrL9UJ9oktsFCutRouc",
  authDomain: "productosenventa.firebaseapp.com",
  projectId: "productosenventa",
  storageBucket: "productosenventa.appspot.com",
  messagingSenderId: "1047351683433",
  appId: "1:1047351683433:web:60d5bfa20bf1c54ccff5f8",
  measurementId: "G-QXHB0PZ0CZ"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//PRODUCTOS contiene todos nuestros items a publicar en nuestra colección de Firestore

const productos = [
    {
        id: 1,
        categoria: 'Informática',
        descripción: 'Poco uso - SO. 2022',
        name: 'All in One',
        imgUrl: 'https://www.tecnogeek.com/images/notas13/c205/c205-01.jpg',
        precio: '$100.00',
        stock: '1'
    },
    {
        id: 2,
        categoria: 'CuidadoPersonal',
        descripción: 'Sin uso',
        name: 'Bici Fija',
        imgUrl: 'http://ranbak.com.ar/timthumb.php?src=/archivos/productos/16015129521515_400n2.jpg&h=1000&w=1000',
        precio: '$100.00',
        stock: '1'

    }, 
    {
        id: 3,
        categoria: 'Decoración',
        descripción: '80cm x 80cm',
        name: 'Espejo Madera',
        imgUrl: 'https://www.elmueble.com/medio/2021/12/24/espejo-cuadrado-madera-la-redoute_b303b7b5_1200x1200.jpeg',
        precio: '$100.00',
        stock: '2'
    },
    {
        id: 4,
        categoria: 'Informática',
        descripción: 'Led - 17 pulgadas',
        name: 'Monitor Samsung',
        imgUrl: 'https://www.computershopping.com.ar/Images/Productos/Grandes/732nw_g.jpg',
        precio: '$100.00',
        stock: '1'
    },
    {
        id: 5,
        categoria: 'Informática',
        descripción: '1Tb - Con 10 Juegos - 2 Joystick',
        name: 'PlayStation 4',
        imgUrl: 'https://www.necxus.com.ar/products_image/12720/1000x1000_1.jpg',
        precio: '$100.00',
        stock: '1'
    },
    {
        id: 6,
        categoria: 'Informática',
        descripción: '10 Juegos - 2 Joystick',
        name: 'PlayStation 3',
        imgUrl: 'https://raw.githubusercontent.com/inafontan/ventadewhatsapp/04d7c28d503b55fc6abc37e574713b5211b56978/src/imagenes/play3.jpg',
        precio: '$100.00',
        stock: '1'
    },
    {
        id: 7,
        categoria: 'Audio & Video',
        descripción: 'Mini Proyector Portatil Led - 1200 Lumenes',
        name: 'Proyector',
        imgUrl: 'https://raw.githubusercontent.com/inafontan/ventadewhatsapp/04d7c28d503b55fc6abc37e574713b5211b56978/src/imagenes/proyector.jpg',
        precio: '$100.00',
        stock: '1'
    },
    {
        id: 8,
        categoria: 'Electrodomésticos',
        descripción: '1Tb - Con 10 Juegos - 2 Joystick',
        name: 'Ventilador de Pie',
        imgUrl: 'https://raw.githubusercontent.com/inafontan/ventadewhatsapp/04d7c28d503b55fc6abc37e574713b5211b56978/src/imagenes/ventiladorpie.jpg',
        precio: '$100.00',
        stock: '4'
    },    
];

  async function dataToFirebase() {
    productos.forEach((item) => {     

        const miColeccion = collection(db, "productosenventa");
        const newDoc = doc(miColeccion);

        setDoc(newDoc, item).then(() => {
          console.log("Document written with ID: ", newDoc.id)})
        .catch(err => {
            console.error("Error adding document: ", err);
        });
    });
}

export default dataToFirebase;