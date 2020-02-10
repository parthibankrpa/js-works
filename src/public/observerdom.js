var controlCheckbox = document.getElementById( "mainCheckbox" ),
  addBtn = document.getElementById( "addNewObserver" ),
  container = document.getElementById( "observersContainer" );


// Concrete Subject

// Extend the controlling checkbox with the Subject class
extend( new Subject(), controlCheckbox );

// Clicking the checkbox will trigger notifications to its observers
controlCheckbox["onclick"] = new Function( "controlCheckbox.Notify(controlCheckbox.checked)" );


addBtn["onclick"] = AddNewObserver;

// Concrete Observer

function AddNewObserver(){

  // Create a new checkbox to be added
  var check  = document.createElement( "input" );
  check.type = "checkbox";

  // Extend the checkbox with the Observer class
  extend( new Observer(), check );

  // Override with custom update behaviour
  check.Update = function( value ){
    this.checked = value;
  };

  // Add the new observer to our list of observers
  // for our main subject
  controlCheckbox.AddObserver( check );

  // Append the item to the container
  container.appendChild( check );
}