import { Injectable } from "@angular/core";
import { Theme, light, dark} from "./theme";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private active: Theme = light;
  private availableThemes: Theme[] = [light, dark];
  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  setDarkTheme(): void {
    localStorage.setItem('th','false')
    this.setActiveTheme(dark);
    localStorage.setItem("theme", "dark");
  }

  setLightTheme(): void {
    localStorage.setItem('th','true')
    this.setActiveTheme(light);
    localStorage.setItem("theme", "light");
  }

  setColorTheme(color:any): void {
    Object.keys(this.active.properties).forEach((property) => {
      if(property=="--text-main-color" || property=='--bg-main-color'){
        this.active.properties[property]=color;
      }
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;
    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
