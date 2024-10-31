import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 10,  // Número de usuarios virtuales
    duration: '10s',  // Duración de la prueba
};

// Lista de URLs a probar
const urls = [
    'http://localhost:8080',     // URL 1
    'http://localhost:8080/endponts/one',  // URL 2
    'http://localhost:8080/endponts/two',  // URL 3
];

export default function () {
    // Recorre cada URL y realiza la solicitud
    urls.forEach(url => {
        const res = http.get(url);

        check(res, {
            'status es 200': (r) => r.status === 200,
            'contiene "World" en el contenido': (r) => r.body.includes('Hello World'),
        });
        
        sleep(0);  // Tiempo de espera entre solicitudes para cada URL
    });
}
