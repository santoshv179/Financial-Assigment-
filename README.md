# Financial Dashboard Project

This is a financial dashboard application built with Next.js and Tailwind CSS, based on a project assignment. It displays key financial metrics, charts, and allows for PDF reports. The web application can also be converted into a native Android/iOS app using Capacitor.

## Final UI Screenshot

Financial Dashboard Screenshot (https://drive.google.com/file/d/1DHMDuT8Ny8bkmBQShCznvVXOXcVpR7QQ/view?usp=drive_link)

## Tech Stack

* **Next.js 14** (App Router)
* **React**
* **Tailwind CSS** (for styling)
* **Recharts** (for charts)
* **jsPDF & html2canvas** (for PDF export)
* **Capacitor** (for mobile app conversion)

## Key Features

* Complete dashboard UI with key stats (AUM, SIP).
* Three distinct charts for Clients, SIP Business, and Monthly MIS.
* Data fetching from a mock JSON API.
* PDF report generation of the entire dashboard.
* Native mobile (Android/iOS) version built using Capacitor.
* Responsive design for mobile, tablet, and desktop.

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/santoshv179/Financial-Assigment-.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd financial-dashboard
    ```

3.  **Install all dependencies:**
    ```bash
    npm install
    ```

## Running the Application

### Web Version

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
2.  Open your browser and navigate to `http://localhost:3000`.

### Mobile Version (Android)

To build and run the mobile app:

1.  **Create a production build of the web app:**
    ```bash
    npm run build
    ```
2.  **Sync the web assets with Capacitor:**
    ```bash
    npx cap sync
    ```
3.  **Open the project in Android Studio:**
    ```bash
    npx cap open android
    ```
4.  In Android Studio, select an emulator or connect a physical device and click the 'Run'  button.


