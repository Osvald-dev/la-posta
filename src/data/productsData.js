import colores from "../assets/img/melaminas/colores.webp";
import fondos from "../assets/img/melaminas/fondos.webp";
import crudos from "../assets/img/melaminas/crudos.webp";

import perfiles from "../assets/img/herrajes/perfiles.webp";
import guias from "../assets/img/herrajes/guias.webp";
import accesorios from "../assets/img/herrajes/accesorios.webp";
import cantos from "../assets/img/herrajes/cantos.webp";

import tornilleria from "../assets/img/ferreteria/tornilleria.webp";
import buloneria from "../assets/img/ferreteria/buloneria.webp";
import herramientas from "../assets/img/ferreteria/herramientas.webp";
import adhesivos from "../assets/img/ferreteria/adhesivos.webp";
import abrasivos from "../assets/img/ferreteria/abrasivos.webp";

import machimbre from "../assets/img/maderas/machimbre.webp";
import tiranteria from "../assets/img/maderas/tiranteria.webp";
import nativas from "../assets/img/maderas/nativas.webp";
import secas from "../assets/img/maderas/secas.webp";

import yeso from "../assets/img/placas/yeso.webp";
import fenolicas from "../assets/img/placas/fenolicos.webp";
import osb from "../assets/img/placas/osb.webp";
import cementicias from "../assets/img/placas/cementicias.webp";
import tableros from "../assets/img/placas/tableros.webp";
import tapas from "../assets/img/placas/tapas.webp";

import flotante from "../assets/img/pisos/flotantes.webp";
import deck from "../assets/img/pisos/deck.webp";
import varillados from "../assets/img/pisos/varillados.webp";
import molduras from "../assets/img/pisos/molduras.webp";



const productsData = {
  melaminas: {
    title: "Melaminas",
    subcategories: [
      { name: "Línea de Colores", img: colores },
      { name: "Fondos/Revestimientos", img: fondos },
      { name: "Crudos", img: crudos },
    ],
  },
  herrajes: {
    title: "Herrajes",
    subcategories: [
      { name: "Perfiles", img: perfiles },
      { name: "Guías Telescópicas", img: guias },
      { name: "Accesorios", img: accesorios },
      { name: "Cantos", img: cantos },
    ],
  },
  ferreteria: {
    title: "Ferretería",
    subcategories: [
      { name: "Tornillería", img: tornilleria },
      { name: "Bulonería", img: buloneria },
      { name: "Herramientas Manuales", img: herramientas },
      { name: "Adhesivos/Selladores", img: adhesivos },
      { name: "Abrasivos", img: abrasivos },
    ],
  },
  maderas: {
    title: "Maderas",
    subcategories: [
      { name: "Machimbre", img: machimbre },
      { name: "Tirantería", img: tiranteria },
      { name: "Maderas Nativas", img: nativas },
      { name: "Maderas Secas a Horno", img: secas },
    ],
  },
  placas: {
    title: "Placas",
    subcategories: [
      { name: "Placas de Yeso", img: yeso },
      { name: "Placas Fenólicas", img: fenolicas },
      { name: "Placas OSB", img: osb },
      { name: "Placas Cementicias", img: cementicias },
      { name: "Tableros", img: tableros },
      { name: "Tapas de Mesas", img: tapas },
    ],
  },
  pisos: {
    title: "Pisos y Revestimientos",
    subcategories: [
      { name: "Piso Flotante", img: flotante },
      { name: "Deck", img: deck },
      { name: "Varillados", img: varillados },
      { name: "Molduras", img: molduras },
    ],
  },
};

export default productsData;
