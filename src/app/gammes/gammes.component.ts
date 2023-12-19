import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";
import {Categorie} from "../model/Categorie";
import {Router} from "@angular/router";
import {catchError, Observable, throwError} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-gammes',
  templateUrl: './gammes.component.html',
  styleUrls: ['./gammes.component.css']
})
export class GammesComponent implements OnInit{
 public gammes:any;
 categories!:Observable<Array<Categorie>>;
 public count=0;
  searchformGroup!:FormGroup;
  errorMessage!:string;
  nbCategorie:any;
  constructor(private adminService:AdminServiceService,private fb:FormBuilder,private router:Router) {

 }

  ngOnInit(): void {

    this.searchformGroup=this.fb.group({
      keyword:this.fb.control("")
    });
    this.handleSearchgammes()
    this.nbreCategorie();
  }
  refreshPage() {
    window.location.reload();
  }
  handleSearchgammes() {
    let kw=this.searchformGroup?.value.keyword;
    this.categories=this.adminService.searchCategories(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );

  }
getCategories(){
  this.adminService.getCategories().subscribe({
    next:(data)=>{
      this.gammes=data;
      this.count = this.gammes.length;

    }
  })
}
nbreCategorie(){
    this.adminService.getnbCategorie().subscribe({
      next:(data)=>{
       this.nbCategorie=data;
      }
    })
}

  handleEdit(gamme: Categorie) {
    this.router.navigateByUrl(`/modifiergammes/${gamme.id}`)
  }

  deletegamme(gamme: Categorie) {
    this.adminService.deleteCategorie(gamme).subscribe({
      next:(data)=>{
    // alert("Categorie Deleted");

    this.getCategories();
    this.nbreCategorie();
   this.refreshPage();
      }
    })
  }
}
