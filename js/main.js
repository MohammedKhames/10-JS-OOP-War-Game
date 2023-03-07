
function Character(name,strength,health){
    this.name=name;
    this.strength=strength;
    this.health=health;

    this.attackBtn=document.querySelector(`#${this.name}-attack`);
    this.alive=document.querySelector(`#${this.name}-alive`);
    this.healthBtn=document.querySelector(`#${this.name}-make-health`);
    this.progress=document.querySelector(`.${this.name}-health span`);
}


Character.prototype.attack= function(enemy){
    if(enemy.health>0){
        enemy.health -= this.strength;
        enemy.progress.style.width=`${enemy.health}%`

    }
    else{
        enemy.attackBtn.remove();
        enemy.healthBtn.remove();
        enemy.alive.innerHTML= `${enemy.name} is Died`
    }
}


Character.prototype.status=function(){

}


Character.prototype.makeHealth=function(){
    if(this.health<100){
        this.health += 10;
        this.progress.style.width=`${this.health}%`

    }

    if(this.health>100){
        this.health = 10
    }


}

let thanos = new Character("thanos" ,10,100);
let ironman = new Character("iron" ,5,100);

thanos.attackBtn.addEventListener("click", function(){
    thanos.attack(ironman)
})

ironman.attackBtn.addEventListener("click", function(){
    thanos.attack(thanos)
})

thanos.healthBtn.addEventListener("click", function(){
    thanos.makeHealth();
})

ironman.healthBtn.addEventListener("click", function(){
    ironman.makeHealth();
})