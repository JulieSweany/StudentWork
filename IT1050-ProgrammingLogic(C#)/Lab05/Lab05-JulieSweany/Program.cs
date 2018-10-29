using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab05_JulieSweany
{
    class Program
    {
        static void Main(string[] args)
        {

            //Question 1

            /* If single selections statements and while statements are similar in that they are both kinds of control
             * statements. Each determines whether a condition is true (or false) and based on that information, the statement
             * determines which line of code is executed next (some lines may be skipped entirely).
             * 
             * They are different because the if single selection statement determines whether the condition is being
             * met and performs the resulting action just once. The while repetition statement is capable of performing
             * multiple occurances of the action, as long as the condition for that action is still being met.
             * 
             */


            //Question 2

            int speed;
            int speedLimit;

            speedLimit = 35;
            speed = 42;

            if (speed > speedLimit)
                Console.WriteLine("SLOW NOW");


            //Question 3

            bool isTrue;

            isTrue = true;

            if (isTrue == true)
                Console.WriteLine("It is True!");
            else
                Console.WriteLine("It is False!");


            isTrue = false;

            if (isTrue == true)
                Console.WriteLine("It is True!");
            else
                Console.WriteLine("It is False!");


            //Question 4

            Console.Write("Please enter a number for the temperature in degrees Fahrenheit: ");

            double fahrenheit = Convert.ToDouble(Console.ReadLine());

            double celsius;

            celsius = (fahrenheit - 32d) * 5d / 9d;

            Console.WriteLine("The temperature in degrees Celsius is: 0" + celsius);

            if (fahrenheit < 40)
                Console.WriteLine("It is cold.");

            if (fahrenheit > 90)
                Console.WriteLine("It is hot.");




            //Question 5


            int x;

            x = 1;

            while (x < 11)
            {
                Console.WriteLine(x);
                x = x + 1;
            }




            //Question 6


            //Following line is just to separate answers a bit.
            Console.WriteLine("");


            int y;

            y = 60;

            while (y > 19)
            {
                Console.WriteLine(y);
                y = y - 1;
            }



            //Question 7


            //Following line is just to separate answers a bit.
            Console.WriteLine("");

            int z;

            z = 10;

            while (z < 21)
            {
                Console.WriteLine(z);
                z = z + 1;
            }




        }
    }
}
