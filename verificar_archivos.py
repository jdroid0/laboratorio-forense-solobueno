from pathlib import Path
required = {
    "firewall.log", "web_access.log", "WIN_SERVICIOS_events.log",
    "captura_red.pcap", "captura_red.txt", "correos.html",
    "vpn_tokens.html", "puravida.js", "clientes.csv",
    "creditos.csv", "seguros.csv", "entregas.csv"
}
folder = Path("evidencia")
missing = sorted(required - {p.name for p in folder.glob("*")})
if missing:
    raise SystemExit(f"Faltan archivos: {missing}")
print("Todos los insumos están presentes.")
