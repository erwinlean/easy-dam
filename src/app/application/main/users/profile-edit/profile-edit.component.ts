import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ProfileEditComponent {
  user = {
    username: 'Juan Perez',
    email: 'juanperez@example.com',
    phone: '+34 600 000 000',
    address: 'Calle Ficticia 123, Madrid',
    profilePicture: 'https://scontent.fmad8-1.fna.fbcdn.net/v/t39.30808-1/424585129_10227021305492524_5414146438717194048_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=C4xBCHSPnxIQ7kNvgEIuvp0&_nc_oc=Adhsch7HWevPevyW3Jgr95omKG5OEgQsZn3FhKGgs4LqUay3ovCDRVY_XMZwqXCFvVU&_nc_zt=24&_nc_ht=scontent.fmad8-1.fna&_nc_gid=AWOuaV5ARsUcjc3G9oEoWO3&oh=00_AYE95hF-HvOKlowayYLvkWbKAiVMagXapTMeFM-_eA0GkA&oe=67D3B6DA', // Base64 o URL de la imagen
  };

  // Método para manejar la subida de la imagen de perfil
  onProfileImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.user.profilePicture = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Método que se llama al enviar el formulario
  onSubmit() {
    console.log('Perfil actualizado:', this.user);
    // Aquí podrías agregar la lógica para actualizar el perfil en tu backend
  }
}