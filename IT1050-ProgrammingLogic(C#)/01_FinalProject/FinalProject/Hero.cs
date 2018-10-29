using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject
{
   
    class Hero
    {
        private string Alterego;
        private string Weakness;
        private bool Antihero;
        private string Gender;
        private string Race;

        public string Power;
        public int PowerLevel;
        public double Health;
        public string Weapons;
        public int Age;
        public string Name;
        public string nemesis;

        public Hero()
        {
        }

        public Hero(string name, string nemesis, string race, string power, int powerLevel)
        {
            this.Name = name;
            this.nemesis = nemesis;
            this.Race = race;
            this.Power = power;
            this.PowerLevel = powerLevel;
        }

        public Hero(string name, string nemesis, string race, string power, bool antihero, int powerLevel)
        {
            this.Name = name;
            this.nemesis = nemesis;
            this.Race = race;
            this.Power = power;
            this.Antihero = antihero;
            this.PowerLevel = powerLevel;
        }
        /*
                Problem 7:
                Each Hero must:
                 - ChargePower (as much as you want)
                 - Investigate
                 - FightCrime (at least one must win. at least one must not win)
                 - Fly (at least one superhero should be able to fly)
                 - Climb
            */
        // TODO: Problem 1 - add a constructor method with a different number and/or types of parameters
        public Hero(string name, string power, int powerLevel)
        {
            this.Name = name;
            this.Power = power;
            this.PowerLevel = powerLevel;
        }

        public void FightCrime(string address)
        {
            // TODO: Problem 2 - Output "Successfully fought crime at address" if PowerLevel > 49
            if (this.PowerLevel > 49)
             Console.WriteLine("Successfully fought crime at " + address + ".");
            
            else
                Console.WriteLine("Oh no! Power level was too low!");

        }

        private bool Investigate()
        {
            // TODO: Problem 3 - output "Investigated Crime" and return true
            bool returnValue = true;

            if (returnValue == true)
                Console.WriteLine("Investigated Crime.");

            return returnValue;


        }

        public void GetInvestigationResult()
       {
            Investigate();
       }

        public void Fly()
        {
            // TODO: Problem 4 - if Power contains Fly, then output "Name is Flying!" else output "Name can't fly!"
            if (this.Power.Contains("Fly"))
            Console.WriteLine(Name + " is Flying!");
            else
            Console.WriteLine(Name + " can't Fly!");
        }

        public void Craft(string material, int numMaterials)
        {
            Console.WriteLine("Crafting with " + material);
        }

        public void Climb(int height)
        {
            Console.WriteLine(this.Name + " is climbing.");
        }
       
        public int ChargePowerLevel()
        {
            // TODO: Problem 5 - increase this.PowerLevel by 1
            this.PowerLevel++;
            return this.PowerLevel;

        }

        // TODO: Problem 6 - Add an overloaded method ChargePower that has a parameter for increaseAmount.  Add increaseAmount to this.PowerLevel and return the new value for this.PowerLevel (try to use a loop calling the other ChargePower)
        public void ChargePowerLevel(int increaseAmount)
        {

            for (int counter = increaseAmount; counter > 0; counter--)
            {
                ChargePowerLevel();
              
            }
            
        }
    }
}
