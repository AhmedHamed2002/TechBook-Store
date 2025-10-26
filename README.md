# 📚 TechBook Store

**TechBook Store** is a modern **online bookstore** built with **Next.js 15**, designed for technology lovers.  
It allows users to **browse, search, and view** the latest tech books, **add them to favorites or cart**, and manage purchases seamlessly.  
With  **Redux Toolkit**, **shadcn/ui**, and **TailwindCSS**, it delivers a smooth, elegant, and fast user experience.

---

## **🏗️ Project Structure**

```bash
TechBook-Store/
├── src/
│   ├── app/
│   │   ├── (routes)/                 # App routes (home, favorites, cart, login, etc.)
│   │   ├── components/               # Reusable React components (BookCard, Navbar, etc.)
│   │   ├── hooks/                    # Custom React hooks
│   │   ├── redux/
│   │   │   ├── store.ts              # Redux store configuration
│   │   │   ├── cartSlice.ts          # Cart state logic
│   │   │   ├── favoriteSlice.ts      # Favorites state logic
│   │   │   └── themeSlice.ts         # Dark mode / theme state logic
│   │   ├── services/
│   │   │   ├── dataService.ts        # Handles API logic (books, favorites, cart)
│   │   │   └── authService.ts        # Firebase authentication
│   │   ├── globals.css               # Global TailwindCSS styles
│   │   └── layout.tsx                # Root layout (includes theme provider, header, etc.)
│   ├── components/ui/                # shadcn/ui components (Button, Card, Dialog, etc.)
│   ├── lib/                          # Utility helpers
│   ├── public/                       # Static files (icons, images)
│   └── README.md

---

**⚙️ Installation & Setup**
1. Clone the repository
git clone https://github.com/<your-username>/TechBook-Store.git
cd TechBook-Store


2. Install dependencies
npm install

3. Run the app
npm run dev 

---

**🧩 Services Overview**
🔹 DataService (src/app/services/data.service.ts)

Manages the bookstore logic, including cart, favorites, mode settings, and book retrieval.

Main Features:

Local storage persistence for cart and favorites

Reactive state management with BehaviorSubject

API integration with IT Book Store API
| Method                     | Description               |
| -------------------------- | ------------------------- |
| `addToCart(item)`          | Add book to shopping cart |
| `removeFromCart(item)`     | Remove book from cart     |
| `addToFavorite(item)`      | Add book to favorites     |
| `removeFromFavorite(item)` | Remove from favorites     |
| `getNewbooks()`            | Fetch latest tech books   |
| `search(query)`            | Search books by keyword   |
| `viewDetails(id)`          | View book details         |
| `saveMode()`               | Save dark/light mode      |
| `getCartItems()`           | Retrieve cart items       |
| `getFavoriteItem()`        | Retrieve favorite items   |

---

**🧰 Tech Stack**
Next js 

TypeScript

shadcn/ui

RxJS

TailwindCSS

SweetAlert2 (for alerts)

LocalStorage API

ITBook Store API

--- 

**👨‍💻 Developer**

Ahmed Hamed
Frontend Developer specializing in Angular & Next js 
🎯 Passionate about crafting interactive, user-friendly web applications.
📘 Currently studying Engineering at Al-Azhar University.
