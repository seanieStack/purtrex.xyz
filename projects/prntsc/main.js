function newLink(){

    function randLetters(){

        var result           = '';
        var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        console.log(charactersLength)
        for ( var i = 0; i < 6; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result
        

    }

    link = "https://prnt.sc/" + randLetters();

    return link;

}

function openInNewTab() {
    var win = window.open(newLink(), '_blank');
    win.focus();
  }