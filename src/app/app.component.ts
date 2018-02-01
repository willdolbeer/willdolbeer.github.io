import { Component, OnInit, OnDestroy} from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
    

export class AppComponent {
    lastScroll: number;
    animateScroll = false;
    
    constructor() {}
    
    scroll(id: string){
        this.animateScroll = true;
        $('html, body').animate({
            scrollTop: $('#'+id).offset().top
        }, 500, () => { 
            this.animateScroll = false;
            if($(window).width() >= 768 && window.scrollY < ($(window).height()/2)){
                $('.navbar').hide(300);
            } 
        });
        if($(window).width() < 768){
            $('#navbar').collapse('hide');
        }
    }
    
    ngOnInit() {
        this.lastScroll = window.pageYOffset || document.documentElement.scrollTop;
        $('.nav-link').click((e) =>{
            e.preventDefault();
        });
        if($(window).width() >= 768){
            if(window.scrollY > ($(window).height()/2)){
                $('.navbar').show();
            }else{
                $('.navbar').hide();
            }
        }
        window.addEventListener('scroll', this.scrolling);
        window.addEventListener('resize', this.resize);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scrolling);
        window.removeEventListener('resize', this.resize);
    }

    scrolling = (): void => {
        if(!this.animateScroll && $(window).width() >= 768){
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if(st <= $(window).height()/2){
                this.lastScroll = st;
                $('.navbar').hide(300);
            }else{
                this.lastScroll = st;
                $('.navbar').show(300);
            }
        }
    };
    
    resize = (): void => {
        if($(window).width() < 768){
            $('.navbar').show();
        }else{
            let yc = window.pageYOffset || document.documentElement.scrollTop;
            if(yc <= $(window).height()/2){
                $('.navbar').hide();
            }else{
                $('.navbar').show();
            }
        }
    }
}
