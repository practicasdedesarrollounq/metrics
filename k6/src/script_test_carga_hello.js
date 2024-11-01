import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 10,  // Número de usuarios virtuales
    duration: '5s',  // Duración de la prueba
};

export default function () {
    const res = http.get('http://localhost:8080/');  // Cambia la URL según sea necesario

    check(res, {
        'status es 200': (r) => r.status === 200,
        'retorna "Hello World"': (r) => r.body.includes('Hello World'),
    });

    sleep(0);  // Tiempo de espera entre las solicitudes de cada usuario
}
