from playwright.sync_api import sync_playwright
import time
import os

def run_visual_check():
    # Ensure directory exists
    os.makedirs("preview_screenshots", exist_ok=True)

    routes = [
        "/",
        "/projects",
        "/projects/1",
        "/projects/1/tasks",
        "/projects/1/schedule",
        "/projects/1/documents",
        "/projects/new",
        "/providers",
        "/reports",
        "/settings/users",
        "/settings/permissions",
    ]

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1440, 'height': 900})
        page = context.new_page()

        print("Waiting for dev server...")
        # Server should already be running from previous steps, but let's check
        success = False
        for _ in range(15):
            try:
                page.goto("http://localhost:3000")
                success = True
                break
            except:
                time.sleep(2)

        if not success:
            print("Error: Could not connect to localhost:3000")
            browser.close()
            return

        for route in routes:
            print(f"Capturing {route}...")
            page.goto(f"http://localhost:3000{route}", wait_until="networkidle")
            filename = route.replace("/", "_").strip("_") or "dashboard"
            page.screenshot(path=f"preview_screenshots/{filename}.png")

        browser.close()
        print("Visual check complete. Screenshots saved in preview_screenshots/")

if __name__ == "__main__":
    run_visual_check()
