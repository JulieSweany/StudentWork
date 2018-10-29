using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab03_JulieSweany
{
    class Program
    {
        static void Main(string[] args)
        {
            //Problem 2

            int number1;
            int number2;
            int sum;

            Console.WriteLine( "Please enter a number: ");
            number1 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine( "Please enter another number: ");
            number2 = Convert.ToInt32(Console.ReadLine());

            sum = number1 + number2;

            Console.WriteLine( "The sum is {0}", sum );


            //Problem 3

            int x;
            int y;
            int z;

            x = 2;
            y = 3;
            z = 7;

            int answer;
            answer = (x + y) * (z + 10);

            Console.WriteLine("({0} + {1}) * ({2} + 10) = {3}", x, y, z, answer);



            //Problem 4
            Console.WriteLine("Hello\tWorld!");
            Console.WriteLine("Hello\nWorld");
            Console.WriteLine("\"Hello World!\"");
            Console.WriteLine("Hello\\World!");

        }
    }
}
