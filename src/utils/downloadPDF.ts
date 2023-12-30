export const donwloadFile = (url: string, nombreArchivo: string): void => {
  const enlaceDescarga = document.createElement('a');
  enlaceDescarga.href = url;
  enlaceDescarga.download = nombreArchivo;
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();
  document.body.removeChild(enlaceDescarga);
}
