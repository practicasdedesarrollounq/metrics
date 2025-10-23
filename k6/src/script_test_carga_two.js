import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 10,  // Número de usuarios virtuales
    duration: '30s',  // Duración de la prueba
};

export default function () {
    const res = http.get('http://java_app:8080/endpoints/two');  // Cambia la URL según sea necesario

    check(res, {
        'status es 200': (r) => r.status === 200,
        'chequeo numero': (r) => r.body.includes('100'),
    });

    sleep(1);  // Tiempo de espera entre las solicitudes de cada usuario
}
