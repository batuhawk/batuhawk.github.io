tabTextAnimation = () => {
  let scrollAvailable = false;
  let oldTitle = document.title;

  window.onblur = () => {
    let title = " Take care yourself! ";
    let position = 0;
    
    scrollAvailable = false;

    scrolltitle = () => {
        if(scrollAvailable == true) return

        document.title = title.substring(position, title.length) + title.substring(0, position); position++;

        if (position > title.length) 
            position = 0
            window.setTimeout(scrolltitle, 100);
    }
    scrolltitle();
  };

  window.onfocus = () => {
    scrollAvailable = true;

    if(scrollAvailable == true) document.title = oldTitle;
  }
} 

tabTextAnimation();