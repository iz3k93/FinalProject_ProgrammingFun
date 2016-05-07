/*
Be prepared, because this is going to be long one,
Took me a good week to get this running
and thats after the fact that i got everything written and typed out.
debugging this was not easy, and i think there might be some bugs i don't know yet,
but i got it to start running from start to finish
everything has its place and reason of why.
*/

/*
The point of these function is to basically have the user interact with the game to 
alternate a variable, that changes how the story will unfold
to explain what each choice does will be hard to explain in detail on what it changes but
every decision either change something of nothing.
but for the most part, i had things go in a loop when the next button was clicked.
Using a defining diagram and pseudocode helped a bit but i had to make a flowchart
because i need a more proper structure for variable accountability,
rather then their placements in this program.
So i put more effort into the flowchart because it gave me a great structure and not just a bunch of text
while building my code.
i just really really really hope you can read these.

*/

var counter = 0;//<---i set all these variables as global because my program was did not function properly when even one of them were not global.
var choice = 0;
var choice1 = 0;
var choice2 = 0;
var choice3 = 0;
var insert = 0;
var number = 0;

//setting my buttons up.
var button = document.getElementById("next");
var content = document.getElementById("content");

button.addEventListener("click", nextPage);

function nextPage(event) {
 content.innerHTML = firstArrays();
 insert++;
}

function firstArrays () {
  
  //first array....I'm not even sure if this is proper, but it works......thank heaven it works. So i ran every function like i did for this first set of array
  if (number === 0) {//<---here i ran my array in a loop to a set point until i call for to change and add.
    if (insert < 13) {
      return phrases[0][insert];//<----all of my arrays are set in another JS file,because this page IS TOO DAMN LONG...but i had to.
    }
    choice = prompt(phrases[0][13]);//<---i had the function prompt the user to type the value since i didn't know how to properly tie a multiple choice option with a next feature.
    choice = Number(choice);//<----gotta convert this string to a number or else my if statement wont run.
    if (choice === 1) {//<---depending on their decision, the choice will fluctuate the counter variable, which is used for later.
      insert = -1;//<---these are all negative 0nes because i had set my "insert++" after my "content.innerHTML"...after the fact that i had finished, i didn't go back and correct anything because the functions still runs ok..hehehe
      number++;//<---i set these up so i can change the if statement and run a different set of arrays
      return phrases[0][14];//<---here i ran my last array before my switch.
    } else {//<---basically the same thing as the top.
      counter++;
      insert = -1
      number++;
      return phrases[0][15];
    }
  } else if (number === 1) {
    //I had to use a lot of space in this JS file because each set of array and sequence of them are unique, so therefor i couldn't really condense any of them.
    
    //second arrays<-----from this point on, everything is basically the same, but some gets very, very complex....you'll see,
    if (insert < 8) {
      return phrases[1][insert];
    }
    choice = prompt(phrases[1][8])
    choice = Number(choice);
    if (choice === 1) {
      insert = -1
      counter++;
      number++;
      return phrases[1][9];
    } else if (number === 2) {
      insert = -1
      counter--;
      number++;
      return phrases[1][10];
    } else {
      insert = -1
      number++;
      return phrases[1][11];
    }
  } else if (number === 2){
    
    //third arrays
    if (insert < 18) {
      return phrases[2][insert];
    }
    
    choice = prompt(phrases[2][18]);
    choice = Number(choice);
    
    if (choice === 1) {
      counter++;
      insert = -1
      number++;
      return phrases[2][19];
    } else {
      insert = -1
      number++;
      return phrases[2][20];
    }
  } else if (number === 3) {
    
    //fourth array....$#!T...started going downhill from here and took me forever to run these next arrays.
    if (insert < 20) {
      return phrases[3][insert];
    }
    
    choice = prompt(phrases[3][20]);
    choice = Number(choice);
    if (choice === 1) {
      insert = -1
      number++;
      counter++;
      return phrases[3][21];
    } else {
      insert = -1
      number++;
      return phrases[3][22];
    }
  } else if (number === 4) {
    
    //fifth array
    if (insert < 18) {
      return phrases[4][insert];
    }
    
    if (insert === 18) {
      insert++;
      insert++;
      choice = prompt(phrases[4][18]);
      choice = Number(choice);
    }
    if (choice === 1) {
      insert = -1
      number++;
      counter++;
      return phrases[4][19];
    } else {
      if (insert < 23) {
        return phrases[4][insert];
      } else if (insert === 23) {//<---When i leave these as an else statement, it added +4 to number variable, so i made these into "else if", and it works so i didn't complain.
        insert = -1;
        number++;
        return phrases[4][23];
      }
    }
  } else if (number === 5) {
    
    //sixth array
    if (insert < 8) {
      return phrases[5][insert];
    }
    if (insert === 8) {
      choice = prompt(phrases[5][8]);
      choice = Number(choice);
    }
    if (choice === 1) {
      if (insert === 8) {
        insert++;
        return phrases[5][insert];
      } else if (insert === 10) {
        insert = -1;
        number++;
        return phrases[5][10];
      }
    } else {
      if (insert === 8) {
        insert++;
        insert++;
        insert++;
        return phrases[5][insert];
      } else if (insert === 12) {
        insert = -1;
        counter++;
        number++;
        return phrases[5][12];
      }
    }
  } else if (number === 6) {
    
    //seventh array
    if (insert < 9) {
      return phrases[6][insert];
    }
    if (insert === 9) {
      choice = prompt(phrases[6][9]);
      choice = Number(choice);
    }
    if (choice === 1) {
      if (insert === 9) {
        insert = 10;
        return phrases[6][insert];
      } else if (insert < 12) {
        return phrases[6][insert];
      } else if (insert === 12) {
        insert = -1;
        number++;
        return phrases[6][12];
      }
    } else {
      if (insert === 9) {
        insert = 13;
        return phrases[6][insert];
      } else if (insert < 15) {
        return phrases[6][insert];
      } else if (insert === 15) {
        insert = -1;
        number++;
        return phrases[6][15];
      }
    }
  } else if (number === 7) {
    
    //eighth array
    if (insert < 13) {
      return phrases[7][insert];
    }
    if (insert === 13) {
      choice = prompt(phrases[7][13]);
      choice = Number(choice);
    }
    if (choice === 1) {
      if (insert === 13) {
        insert++;
        return phrases[7][insert];
      } else if (insert < 16) {
        return phrases[7][insert];
      } else if (insert === 16) {
        insert = -1;
        number++;
        return phrases[7][16];
      }
    } else {
      insert = -1;
      counter++;
      number++;
      return phrases[7][17];
    }
  } else if (number === 8) {
    
    //ninth array
    if (insert < 14) {
      return phrases[8][insert];
    }
    if (insert === 14) {
      choice = prompt(phrases[8][14]);
      choice = Number(choice);
    }
    if (choice === 1) {
      insert = -1;
      counter++;
      number++;
      return phrases[8][15];
    } else if (choice === 2) {
      if (insert === 14) {
        insert++;
        insert++;
        return phrases[8][insert];
      } else if (insert === 17) {
        insert = -1;
        number++;
        return phrases[8][17];
      }
    } else {
      if (insert === 14) {
        insert += 4;
        return phrases[8][insert];
      } else if (insert === 19) {
        insert = -1;
        counter--;
        number++;
        return phrases[8][19];
      }
    }
  } else if (number === 9) {
    
    //tenth array
    if (insert < 7) {
      return phrases[9][insert];
    }
    if (insert === 7) {
      choice = prompt(phrases[9][7]);
      choice = Number(choice);
    }
    if (insert === 12) {
      choice1 = prompt(phrases[9][12]);
      choice1 = Number(choice1);
    }
    if (insert === 19) {
      choice2 = prompt(phrases[9][19]);
      choice2 = Number(choice2);
    }
    if (choice === 1) {
      choice = 4;
      insert = 10;
      return phrases[9][8];
    } else if (choice === 2) {
      insert = 10;
      choice = 4;
      return phrases[9][9];
    } else if (choice < 4) {
      insert = 10;
      choice = 4;
      counter++;
      return phrases[9][10];
    }
    if (insert === 11 ) {
      return phrases[9][11];
    }
    if (choice1 === 1){
      choice1 = 4;
      insert = 15;
      return phrases[9][13];
    } else if (choice1 === 2) {
      choice1 = 4;
      insert = 15;
      return phrases[9][14];
    } else if (choice1 < 4) {
      choice1 = 4;
      insert = 15;
      counter++;
      return phrases[9][15];
    }
    if (insert < 19) {
      return phrases[9][insert];
    }
    if (choice2 === 1) {
      if (insert === 19) {
        insert = 20;
        return phrases[9][insert];
      } else if (insert === 21) {
        counter++;
        insert = -1;
        number++;
        return phrases[9][21];
      }
    } else {
        insert = -1;
        number++;
        return phrases[9][22];
    }
  } else if (number === 10) {
    
    //eleventh array
    if (insert < 13) {
      return phrases[10][insert];
    }
    if (insert === 13) {
      choice = prompt(phrases[10][13]);
      choice = Number(choice);
    }
    if (insert === 17) {
      choice1 = prompt(phrases[10][17]);
      choice1 = Number(choice1);
    }
    if (insert === 23) {
      choice2 = prompt(phrases[10][23]);
      choice2 = Number(choice2);
    }
    if (insert === 30) {
      choice3 = prompt(phrases[10][30]);
      choice3 = Number(choice3);
    }
    if (choice === 1) {
      choice = 4;
      counter++;
      insert += 2;
      return phrases[10][14];
    } else if (choice < 4) {
      choice = 4;
      insert += 2;
      return phrases[10][15];
    }
    if (insert === 16) {
      return phrases[10][16];
    }
    
    
    if (choice1 === 1) {
      choice1 = 4;
      counter++;
      insert++;
      insert++;
      return phrases[10][18];
    } else if (choice1 < 4) {
      choice1 = 4;
      insert++;
      insert++;
      return phrases[10][19];
    }
    if (insert < 23) {
      return phrases[10][insert];
    }
    
    if (choice2 === 1) {
      choice2 = 4;
      counter++;
      insert = 25
      return phrases[10][24];
    } else if (choice2 < 4) {
      choice2 = 4;
      insert = 25;
      return phrases[10][25];
    }
    
    if (insert < 30) {
      return phrases[10][insert];
    }
    
    if (choice3 === 1) {
      counter++;
      insert = -1;
      number++;
      return phrases[10][31];
    } else {
      insert = -1;
      number++;
      return phrases[10][32];
    }
  } else if (number === 11) {
    
    //twelfth array
    if (insert < 4) {
      return phrases[11][insert];
    }
    if (insert === 4) {
      choice = prompt(phrases[11][4]);
      choice = Number(choice);
    }
    if (insert === 14) {
      choice1 = prompt(phrases[11][14]);
      choice1 = Number(choice1);
    }
    if (insert === 25) {
      choice2 = prompt(phrases[11][25]);
      choice2 = Number(choice2);
    }
    if (choice === 1) {
      counter++;
      choice = 4;
      insert++;
      insert++;
      return phrases[11][5];
    } else if (choice < 4){
      choice = 4;
      insert++;
      insert++;
      return phrases[11][6];
    }
    
    if (insert < 14) {
      return phrases[11][insert];
    }
    
    if (choice1 === 1) {
      choice1 = 4;
      counter++;
      insert++;
      insert++;
      return phrases[11][15];
    } else if (choice1 < 4) {
      choice1 = 4;
      insert++;
      insert++;
      return phrases[11][16];
    }
    
    if (insert < 25) {
      return phrases[11][insert];
    }
    
    if (choice2 === 1) {
      if (insert === 25) {
        insert++;
        return phrases[11][insert];
      } else if (insert < 28) {
        return phrases[11][insert];
      } else if (insert === 28) {
        insert = 29;
        choice2 = 4;
        return phrases[11][28];
      }
    } else if (choice2 < 4) {
      insert = 29;
      choice2 = 4;
      return phrases[11][29];
    }
    if (insert === 30) {
      insert = -1;
      number++;
      return phrases[11][30];
    }
  } else if (number === 12) {
    
    //thirteenth array
    if (counter === 17) {
      if (insert < 16) {
        return phrases[12][insert];
      } else if (insert === 16) {
        insert = -1;
        number++;
        return phrases[12][16];
      }
    } else if (counter < 8) {
      if (insert === 0) {
        insert = 33;
        return phrases[12][33];
      } else if (insert < 48) {
        return phrases[12][insert];
      } else if (insert === 48) {
        insert = -1;
        number++;
        return phrases[12][48];
      } 
    } else {
        if (insert === 0) {
         insert = 18;
         return phrases[12][18];
      } else if (insert < 32) {
         return phrases[12][insert];
      } else if (insert === 32) {
         insert = -1;
         number++;
         return phrases[12][32];
      }
    }
  } else if (number === 13) {
    
    //fourteenth array<-----------.....!!!!!!!!!!!!!!!OOOOOMMMMMGGGGGGG!!!!I Hated this one but i love it so much.
    if (insert === 0) {
      return phrases[13][0];
    }
    if (insert < 20) {
      if (counter > 9) {
        if (insert < 8) {
          return phrases[13][insert];
        } else {
          if (counter === 17) {
            if (insert < 12) {
              return phrases[13][insert];
            } else if (insert === 12) {
              insert = 20;
              return phrases[13][insert];
            } else if (insert < 28) {
              return phrases[13][insert];
            } else if (insert === 28) {
              insert = 19;
              return phrases[13][12];
            }
          } else {
            if (insert === 8) {
              insert 
              return phrases[13][insert];
            } else if (insert < 12) {
              return phrases[13][insert];
            } else if (insert === 12) {
              insert = 19;
              return phrases[13][12];
            }
          } 
        }
      } else {
        if (insert === 1) {
          insert = 13;
          return phrases[13][13];
        } else if (insert <20) {
            return phrases[13][insert];
        }
      }
    }
    
    if (insert < 38) {
      return phrases[13][insert];
    }
    if (insert === 38) {
      choice = prompt(phrases[13][38]);
      choice = Number(choice);
    }
    if (choice === 1) {
      choice = 4;
      counter++;
      return phrases[13][39];
    } else if (choice === 2) {
      choice = 4;
      return phrases[13][40];
    } else if (choice < 4) {
      choice = 4;
      counter--;
      return phrases[13][41];
    }
    
    if (counter === 20) {
      if (insert < 43) {
        return phrases[11][insert];
      } else if (insert === 43) {
        insert = -1;
        number++;
        return phrases[11][43];
      }
    } else {
      insert = -1;
      number++;
      return phrases[13][44];
    }
  } else if (number === 14) {
    
    //fifteenth array
    if (insert <8) {
      return phrases[14][insert];
    }
    
    if (counter === 18) {
      if (insert === 8) {
        insert++;
        return phrases[14][8];
      } else if (insert <16) {
        return phrases[14][insert];
      } else if (insert === 16) {
        insert = -1;
        number++;
        return phrases[14][16];
      }
    } else {
      if (insert === 8) {
        insert++;
        return phrases[14][9];
      } else if (insert < 16) {
        return phrases[14][insert];
      } else if (insert === 16) {
        insert = -1;
        number++;
        return phrases[14][16];
      }
    }
  } else if (number === 15) {
    
    //sixteenth array
    if (counter === 18) {
      if (insert < 29) {
        return phrases[15][insert];
      } else {
        return "<h1>THE \"TRUE\" ENDING</h1>";
      }
    } else if (counter < 18 && counter > 9) {
      if (insert === 0) {
        insert = 30;
        return phrases[15][30];
      } else if (insert < 57) {
        return phrases[15][insert];
      } else {
        return "<h1>THE \"GOOD\" ENDING</h1>";
      }
    } else {
      if (insert === 0) {
        insert = 58;
        return phrases[15][58];
      } else if (insert < 64) {
        return phrases[15][insert];
      } else {
        return "<h1>THE \"BAD\" ENDING</h1>";
      }
    }
  }
}
/*
This Was Insane.....but well gratified.....
i can still do more work on this but with my skills, i will need to wait and improve
but man was that exhausting, thank you for all the lessons Teach and best to you too till CodeCaster (when i have time),
Isaac Out!!!!
*/