# Laboratorio de reconstrucción forense — Solo Bueno S.A.

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/USUARIO/REPOSITORIO/HEAD?labpath=Laboratorio_Reconstruccion_Forense.ipynb)

## Propósito

Laboratorio reproducible para analizar los insumos del incidente de Solo Bueno S.A. mediante Python, pandas y Scapy.

## Estructura

```text
.
├── Laboratorio_Reconstruccion_Forense.ipynb
├── requirements.txt
├── runtime.txt
├── evidencia/
│   ├── firewall.log
│   ├── web_access.log
│   ├── WIN_SERVICIOS_events.log
│   ├── captura_red.pcap
│   ├── captura_red.txt
│   ├── correos.html
│   ├── vpn_tokens.html
│   ├── puravida.js
│   ├── clientes.csv
│   ├── creditos.csv
│   ├── seguros.csv
│   └── entregas.csv
└── resultados/
```

## Uso en MyBinder

1. Cree un repositorio público en GitHub.
2. Suba todo el contenido de esta carpeta conservando la estructura.
3. Sustituya `USUARIO/REPOSITORIO` en el badge por los datos reales.
4. Abra `https://mybinder.org`.
5. Introduzca `USUARIO/REPOSITORIO`, rama `main` y el archivo:
   `Laboratorio_Reconstruccion_Forense.ipynb`
6. Presione **Launch**.
7. En JupyterLab, abra el notebook y seleccione:
   **Kernel → Restart Kernel and Run All Cells**.
8. Descargue los CSV de `resultados/` antes de cerrar Binder.

## Seguridad

- No ejecuta `puravida.js`.
- No envía tráfico a dominios externos.
- No intenta explotar SMB ni otros servicios.
- Solo procesa evidencia local.
- MyBinder crea sesiones temporales; los cambios no se guardan automáticamente en GitHub.

## Consideración sobre datos

Aunque el caso sea académico, el repositorio debe contener únicamente datos ficticios o autorizados. Si los archivos fueran reales, no deben publicarse en un repositorio público ni cargarse en MyBinder.
