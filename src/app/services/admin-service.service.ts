import { Injectable } from '@angular/core';
import {Categorie} from "../model/Categorie";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";
import {Famille} from "../model/Famille";
import {Observable} from "rxjs";
import {Fournisseur} from "../model/Fournisseur";
import {Client} from "../model/Client";
import {Utilisateur} from "../model/Utilisateur";
import {Commandes} from "../model/Commandes";
import {CategorieFamille} from "../model/CategorieFamille";
import {ProductFamille} from "../model/ProductFamille";
import {Etat} from "../model/Etat";
import {Unite} from "../model/Unite";
import {Batiment} from "../model/Batiment";
import {CommandeUser} from "../model/CommandeUser";
import transformJavaScript from "@angular-devkit/build-angular/src/tools/esbuild/javascript-transformer-worker";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
familleCategorieId!:number;
  public host: string = "http://localhost:8088"
  private baseUrl = 'http://localhost:8088/api/images';
  public host1 = environment.apiUrl;
  constructor(private http:HttpClient) { }

  getImage(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/1`, { responseType: 'blob' });
    // Assuming the image has an ID of 1; adjust as per your backend logic
  }
  getnbcommandeattente(){
    return this.http.get(this.host+"/commandeattente")
  }
  getnbcommandelivraison(){
    return this.http.get(this.host+"/commandelivraison")
  }
  getnbcommandeannule(){
    return this.http.get(this.host+"/commandeannule")
  }
  getnbcommandefinalisée(){
    return this.http.get(this.host+"/commandeFinalise")
  }
  getnbcommandecours(){
    return this.http.get(this.host+"/commandecours")
  }
  uploadImage(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post<string>(`${this.baseUrl}/upload`, formData);
  }
  public saveCategorie(categorie: Categorie) {
    return this.http.post(this.host + "/categorie", categorie);
  }
  public saveUtilisateur(utilisateur: Utilisateur) {
    return this.http.post(this.host + "/utilisateur", utilisateur);
  }
  public saveFamille(famille: Famille) {
    return this.http.post(this.host + "/famille", famille);
  }
  public deleteCategorie(categorie:Categorie){
    return this.http.delete(this.host+"/categorie/"+categorie.id)
  }
  public deleteProduct(product:ProductFamille){
    return this.http.delete(this.host+"/product/"+product.productId)
  }
  public deleteFamille(famille:CategorieFamille){
    return this.http.delete(this.host+"/famille/"+famille.familleId)
  }


  public saveProduct(product:Product){
    return this.http.post(this.host +"/product",product);
  }
  public saveFournisseur(fournisseur:Fournisseur){
    return this.http.post(this.host +"/fournisseur",fournisseur);
  }
  public saveClient(client:Client){
    return this.http.post(this.host +"/client",client);
  }

  public getCategories() {
    return this.http.get(this.host + "/categories")
  }
  public getClient() {
    return this.http.get(this.host+"/client")
  }
  public getFournisseurs(){
    return this.http.get(this.host+"/fournisseur")

  }
  public deleteFournisseur(fournisseur:Fournisseur){
    return this.http.delete(this.host+"/fournisseur/"+fournisseur.id)
  }
  public deleteClient(client:Client){
    return this.http.delete(this.host+"/client/"+client.id)
  }
  deleteCommande(id:string){
    return this.http.delete(this.host+"/commande/"+id);
  }
  public deleteUtilisateur(utilisateur:Utilisateur){
    return this.http.delete(this.host+"/utilisateur/"+utilisateur.id)
  }
  public getProducts(){
    return this.http.get(this.host +"/products")
  }
  public getUtilisateurs(){
    return this.http.get(this.host +"/utilisateurs")
  }
  getUtilisateurById(utilsateurId: number):Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.host+"/utilisateur/"+utilsateurId);
  }
  getCategorieById(productId: number):Observable<Categorie> {
    return this.http.get<Categorie>(this.host+"/categorie/"+productId);
  }

  getFournisseurById(productId: string):Observable<Fournisseur> {
    return this.http.get<Fournisseur>(this.host+"/fournisseur/"+productId);
  }
  getFamilleById(familleId:number):Observable<Famille> {
    return this.http.get<Famille>(this.host+"/famille/"+familleId);
  }
  getClientById(clientId: string):Observable<Client> {
    return this.http.get<Client>(this.host+"/client/"+clientId);
  }
  getProductById(productId:number):Observable<Product>{
    return this.http.get<Product>(this.host+"/product/"+productId);
  }
  getEtatById(etatId:number):Observable<Etat>{
    return this.http.get<Etat>(this.host+"/etat/"+etatId);
  }
  getUniteById(uniteId:number):Observable<Unite>{
    return this.http.get<Etat>(this.host+"/unite/"+uniteId);
  }
  getBatimentById(batimentId:number):Observable<Batiment>{
    return this.http.get<Batiment>(this.host+"/batiment/"+batimentId);
  }

  public getFamille(){
  return this.http.get(this.host + "/familles")

}

  updateCategorie(id:number,categorie: Categorie):Observable<Categorie> {
return this.http.put<Categorie>(this.host+"/categorieput/"+id,categorie)
  }
  updateEtat(id:number,etat: Etat):Observable<Etat> {
    return this.http.put<Etat>(this.host+"/etatput/"+id,etat)
  }
  updateUnite(id:number,unite: Unite):Observable<Unite> {
    return this.http.put<Unite>(this.host+"/uniteput/"+id,unite)
  }
  updateBatiment(id:number,batiment: Batiment):Observable<Batiment> {
    return this.http.put<Batiment>(this.host+"/batimentput/"+id,batiment)
  }
  updateproduct(id:number,product: Product):Observable<Product> {
    return this.http.put<Product>(this.host+"/productput/"+id,product)
  }

  updateFournisseur(id:string,fournisseur: Fournisseur):Observable<Fournisseur> {
    return this.http.put<Fournisseur>(this.host+"/fournisseurput/"+id,fournisseur)
  }
  updateFamille(id:number,famille:Famille):Observable<Famille>{
    return this.http.put<Famille>(this.host+"/familleput/"+id,famille)
  }
  updateCommande(id:string,commande:Commandes):Observable<Commandes>{
    return this.http.put<Commandes>(this.host+"/commandeput/"+id,commande)
  }
  getCommandeById(commandeId:string):Observable<Commandes>{
    return this.http.get<Commandes>(this.host+"/commande/"+commandeId);
  }
  updateClient(id:string,client: Client):Observable<Client> {
    return this.http.put<Client>(this.host+"/clientput/"+id,client)
  }
  updateUtilisateur(id:number,utilisateur:Utilisateur):Observable<Utilisateur>{
    return this.http.put<Utilisateur>(this.host+"/utilisateurput/"+id,utilisateur);
  }
  public searchProduct(keyword:string):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(this.host+"/productfamille/search?keyword="+keyword);
  }
  public searchCategories(keyword:string):Observable<Array<Categorie>>{
    return this.http.get<Array<Categorie>>(this.host+"/categorie/search?keyword="+keyword);
  }
  public searchFamilles(keyword:string):Observable<Array<Famille>>{
    return this.http.get<Array<Famille>>(this.host+"/categoriefamille/search?keyword="+keyword);
  }
  getCommandes(){
    return this.http.get(this.host+"/commande");
  }
  getnbCategorie(){
    return this.http.get(this.host+"/nombrecategorie");
  }
  getnbFamille(){
    return this.http.get(this.host+"/nombrefamille");
  }
  getFamilleProdnumber(){
    return this.http.get(this.host+"/prodf")
  }
  getnbProduct(){
    return this.http.get(this.host+"/nombreproduct");
  }
  getnbClient(){
    return this.http.get(this.host+"/nombreclient");
  }
  getnbCommande(){
    return this.http.get(this.host+"/nombrecommande");
  }
  getnbFournisseur(){
    return this.http.get(this.host+"/nombrefournisseur");
  }
  getnbLigneCommande(){
    return this.http.get(this.host+"/nombreLigneCommande");
  }
  getnbUtilisateur(){
    return this.http.get(this.host+"/nombreutilisateur");

  }
getFamilleswithCategories(){
    return this.http.get<CategorieFamille>(this.host+"/familles1");
}
  getProductswithFamilles(){
    return this.http.get<ProductFamille>(this.host+"/products1");
  }
  public findCommandeUser(){
    return this.http.get<CommandeUser>(this.host+"/ddd");
  }
getEtats(){
    return this.http.get<Etat>(this.host+"/etats");
}
  getUnites(){
    return this.http.get<Unite>(this.host+"/unites");
  }
  deleteUnite(id:number){
    return this.http.delete(this.host+"/unite/"+id)
  }
  deleteEtat(id:number){
    return this.http.delete(this.host+"/etat/"+id)
  }
  getBatiments(){
    return this.http.get<Batiment>(this.host+"/batiments");
  }
  deleteBatiment(id:number){
    return this.http.delete(this.host+"/batiment/"+id)
  }
  public saveBatiment(batiment: Batiment) {
    return this.http.post(this.host + "/batiment", batiment);
  }
  public saveEtat(etat: Etat) {
    return this.http.post(this.host + "/etat", etat);
  }
  public saveUnite(unite: Unite) {
    return this.http.post(this.host + "/unite", unite);
  }

}
