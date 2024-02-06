import subprocess
from collections import defaultdict

def hacer_request(url):
    try:
        # Ejecutar el comando curl con la URL proporcionada
        resultado = subprocess.check_output(["curl", url], text=True)

        # Retornar la respuesta
        return resultado

    except subprocess.CalledProcessError as e:
        # Manejar errores si la solicitud no fue exitosa
        return f"Error al hacer la solicitud: {e}"

def main():
    url = "http://proxy/web1/"
    
    # Preguntar al usuario cuántas solicitudes desea hacer
    num_requests = int(input("Ingrese el número de solicitudes que desea realizar: "))
    
    # Inicializar un diccionario para contar las respuestas
    contador_respuestas = defaultdict(int)

    # Iterar sobre el número de solicitudes y realizar cada una
    for i in range(num_requests):
        print(f"\nSolicitud {i + 1}:")
        respuesta = hacer_request(url)

        # Imprimir y guardar en el registro la respuesta
        print("Respuesta del servidor:")
        print(respuesta)

        # Incrementar el contador de respuestas
        contador_respuestas[respuesta] += 1

        # Guardar en el registro
        with open("registro.txt", "a") as archivo_registro:
            archivo_registro.write(f"Solicitud {i + 1}:\n{respuesta}\n{'='*30}\n")

    # Imprimir el contador de respuestas al final
    print("\nContador de respuestas:")
    for respuesta, cantidad in contador_respuestas.items():
        print(f"{respuesta}: {cantidad} veces")

if __name__ == "__main__":
    print("Start")
    main()
