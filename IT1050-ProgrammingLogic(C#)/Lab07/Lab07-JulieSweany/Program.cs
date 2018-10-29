using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab07_JulieSweany
{
    class Program
    {
        static void Main(string[] args)
        {

            //Question 1

            //loop control variable is "x"
            int x;
            x = 1;

            //Declaring the "counter" variable
            int counter;
            counter = 0;

            //"x < 10" is the loop terminating condition
            while (x < 10)
            { Console.WriteLine(x);
                //the loop control variable is modified in the following line
                x = x + 2;
                ++counter;
            }

            Console.WriteLine( "The counter reached {0}.", counter);


            //Question 2

            

            for ( int i = 30; i < 46; ++i )
            {
                Console.WriteLine(i);
                if ((i % 2) == 0)
                    Console.WriteLine("It's even.");
                else
                    Console.WriteLine("It's odd.");
            }


            //Question 3

            int t;

            Console.WriteLine("Please enter the military time: ");
            t = Convert.ToInt32(Console.ReadLine());

            if (t < 12)
                Console.WriteLine("Good Morning");

            else
                if (t > 16)
                 Console.WriteLine("Good Evening");

            else
                Console.WriteLine("Good Afternoon");


            //Question 4

            //Since "i" was used previously, I'm using "y" here.
            //The code was originally written as an infinite loop. The value of y never changed.
            //It is necessary to increment the value of y.
            int y = 10;
            while (y < 21)
            {
                Console.WriteLine(y);
                y++;
            }


            //Question 5
            //Used "a" for the variable since "i" was used previously.
            //It was necessary to add the curly braces. Without them, the second Console.WriteLine only
            //executed once the loop termination condition was reached.
            for (int a = 0; a < 101; a++)
            {
                Console.WriteLine(a);
                Console.WriteLine("************");
            }
            //Question 6(a)

            int row;
            int column;
            int space;

            for (row = 1; row <= 10; row++)
            {
                for (column = 1; column <= row; column++)
                    Console.Write("*");
                Console.WriteLine();
            }

            //Just some space
            Console.WriteLine();

            //Question 6b

            int xrow;
            int xcolumn;
            int xspace;

                for (xrow = 1; xrow <= 10; xrow++)
                {
                    for (xcolumn = 10; xcolumn >= xrow; xcolumn--)
                        Console.Write("*");
                Console.WriteLine();
                }



            




        }
    }
}
