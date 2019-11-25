import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  public keyWord:string ;
  public currentPage:number=1 ;
  public size:number=10 ;
  public dataImages=[] ;
  public totalPages :number ;


  constructor(private httClient:HttpClient) { }

  ngOnInit() {
  }

  onLoadImage(){
    this.dataImages=[] ;
    this.currentPage=1 ;
    this.totalPages=0 ;
    this.doSearch() ;
    
  }

  doSearch(){
    this.httClient.get("https://pixabay.com/api/?key=13818335-4b653ccf7c55f8c095bf902c6&q="+this.keyWord+"&per_page="+this.size+"&page="+this.currentPage)
    .subscribe(data=>{
     data['hits'].forEach(image => {
       this.dataImages.push(image) ;
       this.totalPages=data['totalHits']/this.size ;
       
     });

    } ,err=>{
      console.log(err) ;

    })

  }

  loadData(event){
    if(this.currentPage<this.totalPages){
      console.log(this.currentPage+"/"+this.totalPages) ; 
      ++this.currentPage ;
      this.doSearch() ;
      event.target.complete() ; 

    
    }
    if(this.currentPage>=this.totalPages){
      event.target.disabled=true ;
    }
    
  }

}
