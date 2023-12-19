import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";
import {Famille} from "../model/Famille";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import {Categorie} from "../model/Categorie";
import {CategorieFamille} from "../model/CategorieFamille";

@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrls: ['./famille.component.css']
})
export class FamilleComponent implements OnInit{
  public gammes:any;
  public count:any;
  categorieFamille:any;
  familleprodnumber:any;
  familles!:Observable<Array<Famille>>;
  fami:any;
  searchformGroup!:FormGroup;
  errorMessage!:string;
  nbFamille:any;
  constructor(private adminService:AdminServiceService,private fb:FormBuilder,private router:Router) {

  }
  ngOnInit(): void {
    this.searchformGroup=this.fb.group({
      keyword:this.fb.control("")
    });
    this.handleSearchFamilles();
    this.adminService.getCategories().subscribe({
      next:data=>{
        this.gammes=data;
        this.count = this.gammes.length;
      }
    })
 // this.getCategorieFamille();
    this.nbreFamille();
    this.getFamilleProdnumber();
    this.getNjareb();

  }
  nbreFamille(){
    this.adminService.getnbFamille().subscribe({next:(data)=>{
      this.nbFamille=data;
      }})
  }
  getNjareb(){
    for (let i = 0; i < this.familleprodnumber.length; i++) {
      this.categorieFamille[i].nbProductFamilleId = this.familleprodnumber[i].nbProductFamilleId;
    }
  }
  handleSearchFamilles() {

    let kw=this.searchformGroup?.value.keyword;
   this.adminService.searchFamilles(kw)
      .subscribe({next:(data)=>{
        this.categorieFamille=data;}
      }
      )



  }
  refreshPage() {
    window.location.reload();
  }
  getFamilleProdnumber(){
    this.adminService.getFamilleProdnumber().subscribe({
      next:(data)=>{
        this.familleprodnumber=data;
      }
    })
  }

  getCategorieFamille(){

    this.adminService.getFamilleswithCategories().subscribe({
      next:(data)=>{
        this.categorieFamille=data;

      }
    })
  }
getFamilles(){
  this.adminService.getFamille().subscribe({
    next:data=>{
      this.fami=data;
      this.count = this.fami.length;
    }
  })
}
  handleFamille(famille:CategorieFamille ) {
    this.adminService.familleCategorieId=famille.categorieId;
    this.router.navigateByUrl(`/modifierFamille/${famille.familleId}`)
  }

  deleteFamille(famille: CategorieFamille) {
    this.adminService.deleteFamille(famille).subscribe({
      next:(data)=>{
        // alert("Famille deleted");
        this.getCategorieFamille();
        this.handleSearchFamilles();
        this.nbreFamille();
      }
    })
  }
}
