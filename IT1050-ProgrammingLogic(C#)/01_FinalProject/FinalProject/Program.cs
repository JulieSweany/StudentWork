using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject
{
    class Program
    {
        static void Main(string[] args)
        {
            Hero myHero = new Hero("Batman", "Fly", 20);
            Hero myOtherHero = new Hero("Flash", "Zoom", "Human", "Speed", true, 30);
            Hero thirdHero = new Hero("Wonder Woman", "All bad people", "Amazonian", "Stength, Speed, Fly", 80);

            myHero.ChargePowerLevel(80);
            myHero.GetInvestigationResult();
            myHero.FightCrime("678 W. 150th Street");
            myHero.Fly();
            myHero.Climb(25);

            Console.WriteLine();

            myOtherHero.ChargePowerLevel(2);
            myOtherHero.GetInvestigationResult();
            myOtherHero.FightCrime("1500 Oak Street");
            myOtherHero.Fly();
            myOtherHero.Climb(25);

            Console.WriteLine();

            thirdHero.ChargePowerLevel(5);
            thirdHero.GetInvestigationResult();
            thirdHero.FightCrime("123 Main Street");
            thirdHero.Fly();
            thirdHero.Climb(15);

          


            
            /*
                Problem 7:
                Each Hero must:
                 - ChargePower (as much as you want)
                 - Investigate
                 - FightCrime (at least one must win. at least one must not win)
                 - Fly (at least one superhero should be able to fly)
                 - Climb
            */


        }
    }
}
