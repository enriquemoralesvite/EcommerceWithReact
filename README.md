# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
## 🛒 Proyecto Ecommerce

Este sitio web es una tienda en línea construida con React, TypeScript y Vite. Puedes explorarlo en funcionamiento aquí: [ecommercewithreact1.vercel.app](https://ecommercewithreact1.vercel.app/)

### ✨ Funcionalidades destacadas

- Navegación fluida entre productos mediante React Router
- Listado de productos con información como nombre, precio y descripción
- Carrito de compras dinámico: agrega y elimina productos fácilmente
- Estilo moderno y responsive gracias a Tailwind CSS
- Manejo de estado optimizado con React Context

### 🚀 Objetivo del proyecto

Este ecommerce fue creado con fines educativos y prácticos, como parte del aprendizaje de desarrollo web moderno utilizando herramientas como Vite, React y TypeScript. Es un excelente punto de partida para agregar características como integración con pasarelas de pago, autenticación de usuarios o panel de administración.

---

