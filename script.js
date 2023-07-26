let myLibrary = [];

function books(title, author, pages, haveRead) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary(book1) {
  myLibrary.push(book1);
}

const add = document.querySelector('.add');
const popup = document.querySelector('.popup');
const disp = document.querySelector('.disp');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const haveRead = document.getElementById('haveRead');
const contain = document.querySelector('.container');

add.addEventListener('click', function () {
  disp.style.display = 'block';
  title.value = '';
  author.value = '';
  pages.value = '';
  haveRead.checked = false;
});

popup.addEventListener('submit', function (event) {
  event.preventDefault();

  const Btitle = title.value;
  const Bauthor = author.value;
  const Bpages = pages.value;
  const BhaveRead = haveRead.checked; // Use 'checked' property for the checkbox
  let book1 = new books(Btitle, Bauthor, Bpages, BhaveRead);
  myLibrary.push(book1);
  disp.style.display = 'none';
  bookloop(myLibrary);
  console.log(myLibrary);
});
const container =document.querySelector('.container')


function bookloop(myLibrary){
    container.innerHTML='';
    for(let i=0; i<myLibrary.length; i++){
        const title =myLibrary[i].title;
        const author=myLibrary[i].author;
        const pages=myLibrary[i].pages;
        const haveRead=myLibrary[i].haveRead;
        
        const cont= document.createElement('div');
        cont.classList.add('cont');
        container.appendChild(cont)
        const head = document.createElement('div')
        head.classList.add('head')
        const xbutton=document.createElement('button')
        xbutton.classList.add('xbutton')
        xbutton.textContent='X'
        const titlediv=document.createElement('div')
        titlediv.classList.add('title')
        titlediv.textContent=title
        const authordiv=document.createElement('div')
        authordiv.classList.add('author')
        authordiv.textContent='Author: '+author;
        const pagesdiv=document.createElement('div')
        pagesdiv.classList.add('pages')
        pagesdiv.textContent='Pages: '+pages;
        const ynhr =document.createElement('div')
        ynhr.classList.add('ynhr')
        const haveReaddiv=document.createElement('div')
        haveReaddiv.classList.add('haveRead')
        const yes =document.createElement('button')
        yes.classList.add('yes')
        yes.textContent='YES'
        const no =document.createElement('button')
        no.classList.add('no')
        no.textContent='NO'
        const comp=document.createElement('div')
        comp.classList.add('comp')

        if(haveRead===true){
            haveReaddiv.textContent='Book completion: '
            comp.textContent='Complete'
            comp.style.backgroundColor = 'rgba(144, 238, 144, 1)';
        }else{
            haveReaddiv.textContent='Book completion: '
            comp.textContent='In Progress'
            comp.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            
        }
        yes.addEventListener('click', function () {
            yes.style.backgroundColor = '#ADD8E6';
            no.style.backgroundColor = 'white';
            comp.textContent='Complete'
            comp.style.backgroundColor = 'rgba(144, 238, 144, 1)';

          });
      
        no.addEventListener('click', function () {
            no.style.backgroundColor = '#ADD8E6';
            yes.style.backgroundColor = 'white';
            comp.textContent='In Progress'
            comp.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
          });
        xbutton.addEventListener('click',function(){
            myLibrary.splice(i,1);
            bookloop(myLibrary);
        })
        
        head.appendChild(titlediv)
        head.appendChild(xbutton)

        ynhr.appendChild(haveReaddiv)
        ynhr.appendChild(yes)
        ynhr.appendChild(no)
        
        cont.appendChild(head);
        cont.appendChild(authordiv);
        cont.appendChild(pagesdiv);
        cont.appendChild(ynhr);
        cont.appendChild(comp)

    }
}
