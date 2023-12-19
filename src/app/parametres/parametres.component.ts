import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";
import {Unite} from "../model/Unite";
import {Etat} from "../model/Etat";
import {Batiment} from "../model/Batiment";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Famille} from "../model/Famille";
import {Router} from "@angular/router";
import {Categorie} from "../model/Categorie";

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit{
  unites:any;
  etats:any;
  batiments:any;
  ngEtat!:FormGroup;
  ngUnite!:FormGroup;
  ngBatiment!:FormGroup;
  ngModifEtat!:FormGroup;
  ngModifUnite!:FormGroup;
  ngModifBatiment!:FormGroup;
public  etatId!:any;
  public  uniteId!:any;
  public  batimentId!:any;
  constructor(private adminService:AdminServiceService,private fb:FormBuilder,private router:Router) {
  this.createForm();
  this.createForm1();
  this.createForm2();
  this.ModifierEtatForm();
  this.ModifierUniteForm();
  this.ModifierBatimentForm();
  // this.updateUnite();
  // this.updateBatiment();
  // this.updateEtat();

  }
  ngOnInit(): void {
this.getetats();
this.getunites();
this.getbatiments();

  }
  ModifierEtatForm(){
    this.ngModifEtat = new FormGroup({
      nom:new FormControl(),
    });
  }
  ModifierUniteForm(){
    this.ngModifUnite = new FormGroup({
      nom:new FormControl(),
    });
  }
  ModifierBatimentForm(){
    this.ngModifBatiment = new FormGroup({
      nom:new FormControl(),
    });
  }
  createForm() {
    this.ngEtat = this.fb.group({
      nom:[''],
    });}

  addEtat() {
    let etat:Etat=this.ngEtat.value;
    this.adminService.saveEtat(etat).subscribe({
      next:data=> {
      }

    });
    this.refreshPage();

  }
  createForm1() {
    this.ngUnite = this.fb.group({
      nom: [''],
    });}

  addUnite() {
    let unite:Unite=this.ngUnite.value;
    this.adminService.saveUnite(unite).subscribe({
      next:data=> {}
    });
this.refreshPage();
  }
  refreshPage() {
    window.location.reload();
  }
  createForm2() {
    this.ngBatiment = this.fb.group({
      nom: [''],
    });}

  addBatiment() {
    let batiment:Batiment=this.ngBatiment.value;
    this.adminService.saveBatiment(batiment).subscribe({
      next:data=> {}
    });
    this.refreshPage();

  }
getetats(){
    this.adminService.getEtats().subscribe({
      next:(data)=>{
        this.etats=data;
      }
    })
}
  getbatiments(){
    this.adminService.getBatiments().subscribe({
      next:(data)=>{
        this.batiments=data;
      }
    })
  }

  getunites(){
    this.adminService.getUnites().subscribe({
      next:(data)=>{
        this.unites=data;
      }
    })
  }

  deleteUnite(unite: Unite) {
  this.adminService.deleteUnite(unite.id).subscribe({
    next:(data)=>{
      this.getunites();
    }
  })
  }

  deleteEtat(etat:Etat) {
    this.adminService.deleteEtat(etat.id).subscribe({
      next:(data)=>{
        this.getetats();
      }
    })
  }

  deleteBatiment(batiment: Batiment) {
    this.adminService.deleteBatiment(batiment.id).subscribe({
      next:(data)=>{
        this.getbatiments();
      }
    })
  }

  editEtat(etat:Etat){
    this.etatId=etat.id;
    console.log(this.etatId);
    this.adminService.getEtatById(this.etatId).subscribe({
      next:(data)=>{
        this.ngModifEtat=this.fb.group({
          nom:[data.nom]
        })
      },error:err => {
        console.log(err);
      }
    })
  }
  editUnite(unite:Unite){
    this.uniteId=unite.id;
    console.log(this.uniteId);
    this.adminService.getUniteById(this.uniteId).subscribe({
      next:(data)=>{
        this.ngModifUnite=this.fb.group({
          nom:[data.nom]
        })
      },error:err => {
        console.log(err);
      }
    })
  }
  editBatiment(batiment:Batiment){
    this.batimentId=batiment.id;
    console.log(this.batimentId);
    this.adminService.getBatimentById(this.batimentId).subscribe({
      next:(data)=>{
        this.ngModifBatiment=this.fb.group({
          nom:[data.nom]
        })
      },error:err => {
        console.log(err);
      }
    })
  }

  updateEtat(){

    let etat:Etat=this.ngModifEtat.value;
    this.adminService.updateEtat(this.etatId,etat).subscribe({
      next:(data)=>{
        alert("etat Updated");
    this.refreshPage();
      }
    })
  }

  updateUnite() {
    let unite:Unite=this.ngModifUnite.value;
    this.adminService.updateUnite(this.uniteId,unite).subscribe({
      next:(data)=>{
        alert("unite Updated");
        this.refreshPage();
      }
    })
  }
  updateBatiment() {
    let batiment:Batiment=this.ngModifBatiment.value;
    this.adminService.updateBatiment(this.batimentId,batiment).subscribe({
      next:(data)=>{
        alert("batiment Updated");
        this.refreshPage();
      }
    })
  }
}
