//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Where did the first controlled, powered,and heavier than air flight occur?"
choice1[1]="Outside of a bicycle shop in Ohio"
choice1[2]="Kitty Hawk, NC."
choice1[3]="JFK"
choice1[4]="Cape Canaveral."

question[2]="Which conflict can modern US military aviation be traced to?"
choice2[1]="Americal Independence"
choice2[2]="Second Indo China War"
choice2[3]="The War of Nothern Aggression"
choice2[4]="The still ongoing Korean Military Police Action of 1950"

question[3]="The first atomic bomb used in combat was certainly secretive and technologically advanced, as was the aircraft that delivered it. Which aircraft was it?"
choice3[1]="B-29 Super Fortress"
choice3[2]="B-17 Flying Fortress"
choice3[3]="B-2 Spirit"
choice3[4]="B-52 Strato Fortress"

question[4]="Which manufacturer produced the world famous WWII bomber the B-17 Flying Fortress?"
choice4[1]="Airbus"
choice4[2]="Northrup-Grumman"
choice4[3]="Lockheed-Martin"
choice4[4]="Boeing"

question[5]="Who is the first recorded pilot to break the sound barrier in straight and level flight?"
choice5[1]="Neil Armstrong"
choice5[2]="Neal Young"
choice5[3]="Chuck Yeager"
choice5[4]="Chuck Taylor"

question[6]="What was the first aircraft to break the sound barrier?"
choice5[1]="F-15 Strike Falcon"
choice5[2]="B-1 Speedbird"
choice5[3]="Bell X-1"
choice5[4]="F-117A Stinkbug"

question[7]="What was the unofficial name of the aircraft that dropped the first atomic bomb?"
choice5[1]="Glamourous Glennis"
choice5[2]="Ma Belle"
choice5[3]="Enola Gay"
choice5[4]="Jennifer Anniston Express"

question[8]="What was the unofficial name of the second aircraft to drop an atomic bomb?"
choice5[1]="Bockscar"
choice5[2]="Let 'er Rip"
choice5[3]="Bosco"
choice5[4]="Buenos Tardes"

question[9]="Who was Glamourous Glennis?"
choice5[1]="A famous Vaudville Villian"
choice5[2]="A simple waitress"
choice5[3]="A bomber pilot's Mom"
choice5[4]="A test pilots Wife"

question[10]="Where was the first product of the Manhattan Project (Atomic Bomb) tested?"
choice5[1]="Chicago"
choice5[2]="Moscow"
choice5[3]="Trinity Site"
choice5[4]="Hiroshima"

solution[1]="b"
solution[2]="c"
solution[3]="a"
solution[4]="d"
solution[5]="c"
solution[6]="c"
solution[7]="c"
solution[8]="a"
solution[9]="d"
solution[10]="c"

