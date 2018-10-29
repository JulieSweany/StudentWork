using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab11
{
    class Program
    {
        static void Main(string[] args)
        {
            //Q1

            string[] names = { "Al Dente", "Anna Graham", "Earle Bird", "Ginger Rayle", "Iona Ford" };
            Console.WriteLine(names[2]);
            Console.WriteLine(names[4]);

            //Q2
            
            string[] months = new string[12];
            months[0] = "January";
            months[1] = "February";
            months[2] = "March";
            months[3] = "April";
            months[4] = "May";
            months[5] = "June";
            months[6] = "July";
            months[7] = "August";
            months[8] = "September";
            months[9] = "October";
            months[10] = "November";
            months[11] = "December";

            for ( int counter = 0; counter < months.Length; ++counter)
                Console.WriteLine("{0, 4}{1, 10}", counter + 1, months[ counter ]);

            //Q3

            string[] seasons = { "Spring", "Summer", "Fall", "Winter" };
            foreach (string seasonName in seasons)
                Console.WriteLine(seasonName);

            //Q4

            int[] array = new int[1000];

            Random random = new Random();
            int randomNumber;

            for (int counter = 0; counter < array.Length; ++counter)
            {
                randomNumber = random.Next(0, 100);
                array[counter] = randomNumber;
            }

            foreach (int elementValue in array)
                Console.Write("{0}, ", elementValue);

        }
    }
}
