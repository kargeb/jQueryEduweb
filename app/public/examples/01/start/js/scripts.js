// jQuery zawsze podlaczaj najpierw, dopiero ponizej podlaczaj skrypty ktore korzystaja z jquery
// A tak sie podlacza ja:
// <script src="/js/jquery-2.2.1.js"></script>

// zeby sprawdzi czy jest jQuery, wystarczy w consol.lo wpisac doalra

console.log($);

// $ i obiekt jQuery TO DOKLADNIE TO SAMO !! :

console.log(jQuery === $);  // TRUE

// UWAGA ! jQuery TO JEST FNKCJA ! I Zawsze bedziemy wywolywac ja para nawiasow !  ->  jQuery()