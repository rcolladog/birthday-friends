 # Birthday Friends

Una app móvil para nunca olvidar los cumpleaños de tus amigos. Construida con React Native y Expo.

---

##  Características

###  Gestión de Amigos
- **Agregar amigos** con sus datos básicos
- **Editar información** con un tap
- **Eliminar amigos** con swipe
- **Fotos de perfil** subidas directamente desde tu galería

###  Calendario Interactivo
- Visualiza todos los cumpleaños en un calendario 
- **Popups modales** con detalles del cumpleaños al tocar una fecha
- Navegación intuitiva mes a mes


###  Interfaz Moderna
- Diseño limpio y responsivo
- Componentes UI desde RNEUI (React Native Elements UI)
- Navegación fluida con Expo Router
- Footer de navegación intuitivo

---

## Stack Tecnológico

| Tecnología | Uso |
|---|---|
| **React Native** | Framework base |
| **TypeScript** | Type-safe development |
| **Expo** | Build system y herramientas |
| **Expo Router** | Navegación entre pantallas |
| **Supabase** | Backend, autenticación y base de datos |
| **react-native-calendars** | Componente calendario |
| **@rneui/themed** | Componentes UI |
| **expo-image-picker** | Subida de fotos |
| **GitHub Actions** | Para mantener supabase activo |

---

##  Instalación

### Requisitos Previos
- Node.js 20+
- npm 
- Cuenta de Supabase (gratis)

### Pasos

1. **Clona el repositorio**
```bash
git clone https://github.com/rcolladog/birthday-friends.git
cd birthday-friends
```

2. **Instala dependencias**
```bash
npm install --legacy-peer-deps
```

3. **Configura las variables de entorno**

Crea un archivo `.env` en la raíz:
```
EXPO_PUBLIC_SUPABASE_URL=tu_url_supabase
EXPO_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
```

4. **Inicia el servidor de desarrollo**
```bash
npx expo start
```

5. **Abre en tu dispositivo**
- Escanea el código QR con la cámara de tu iPhone
- O abre Expo Go y busca el proyecto

---

##  Configuración de Supabase

### Autenticación Anónima
- La app usa autenticación anónima para máxima privacidad
- No necesitas crear una cuenta
- Los datos se sincronizan localmente

### Row Level Security (RLS)
- Cada usuario solo puede ver sus propios datos
- Políticas de seguridad configuradas automáticamente

### Mantener el Proyecto Activo
Se ejecuta un workflow de GitHub para mantener el proyecto Supabase activo (evita hibernación en tier gratis).

---


## Licencia

Este proyecto es personal y de código abierto. 

---

##  Autora

**Ruth Collado García ** | React Native | España

---

