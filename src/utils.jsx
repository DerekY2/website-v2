// utils

export function getImageUrl(path){
  return new URL(`./assets/${path}`, import.meta.url).href;
}