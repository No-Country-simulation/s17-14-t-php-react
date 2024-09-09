const BASE_URL = "http://localhost:8000";

export const login = async (email, password) => {
    const url = `${BASE_URL}/api/login`;
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // No es necesario el token aquí, ya que es un inicio de sesión
        },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        const errorText = await res.text(); // Obtén la respuesta en texto para depuración
        console.error('Error en el login:', errorText);
        throw new Error('Error en el login');
    }

    const data = await res.json();
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.data));
    return data;
}
