import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AdminServiceService} from "../services/admin-service.service";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit{
  selectedFile: File | null = null;
  image: any;


  constructor(private adminService: AdminServiceService,public http:HttpClient) {
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.adminService.uploadImage(this.selectedFile).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }

  ngOnInit(): void {
    this.loadImage();

  }
  loadImage(): void {
    this.adminService.getImage().subscribe(
      (data: any) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.image = e.target.result;
        };
        reader.readAsDataURL(data);
      },
      error => {
        console.error('Error loading image:', error);
      }
    );
  }
}

