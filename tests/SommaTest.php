<?php

use PHPUnit\Framework\TestCase;

class SommaTest extends TestCase{


    public function test_somma()
    {
        // una class
        $this->assertEquals(10,5+5,"5+5 hoh ha dato il ris");

        $colori = ['a','b','c'];

        $this->assertCount(3,$colori);
        $this->assertEquals(3,count($colori));
    }

    

}