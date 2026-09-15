# Neurogine Catalog Product Module

A dedicated, isolated feature module responsible for rendering and managing the **Product Catalog Screen** within the Neurogine mobile ecosystem. Built with a strict separation of concerns, this module handles catalog data fetching, listing UI presentation, interaction handlers, and theme consumption from the shared design system.

---

## 🏛️ Module Responsibility

As part of the **Neurogine Micro-Module Architecture**, this repository acts as an independent feature library:

* **Primary Screen:** Serves the main Product Catalog screen (First Screen of the application).
* **Data Presentation:** Displays product lists, handles loading states, and processes catalog interactions.
* **Isolated Scope:** Encapsulates its own screen views, local API calls, dedicated utilities, and TypeScript declarations without leaking feature logic to the host application.

---

## 🛠️ Tech Stack & Standards

| Category | Technologies |
| :--- | :--- |
| **Framework & Language** | React Native, TypeScript |
| **Package Manager** | Yarn |
| **Styling & Design System** | Styled Components (`styled-components/native`) |

---

## 📁 Directory Structure

```text
neurogine-catalog-product/
├── src/
│   ├── Screens/       # Product catalog screens and view containers
│   ├── Shared/        # Local reusable components dedicated to catalog UI
│   ├── Types/         # Module-specific TypeScript interfaces and types
│   ├── API/           # Axios / Query fetchers for catalog endpoints
│   ├── Services/      # Business logic and domain service operations
│   ├── Utils/         # Helper functions and formatting utilities
│   ├── Constants/     # Action types, route strings, and constant values
│   └── theme/         # Theme setup derived from neuro-ui-kit-theme-config
├── package.json
└── tsconfig.json