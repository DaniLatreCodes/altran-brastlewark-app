import React from 'react'
import {withRouter} from 'react-router-dom'
import './index.sass'

function Landing(){

    return(
      <> 
        <section className="landing_presentation">
          <article>
            <header>
              This	is	one	of	these	times,	our	heroes	just	arrived	at	a	Gnome	town	called	
              Brastlewark.	To	facilitate	trade	with	the	local	population	they	need	an	easy	way	to	
              browse	all	the	inhabitants	details.	We've	found	a	server	providing	all	the	census	data	
              of	Brastlewark	at	the	following	address:
              https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json
            </header>
            <section>
              Gnomes	in	this	town	are	not	really	social	because	they	have	too	much	work	to	do.	
              That's	the	reason	they	can	have	more	than	one	job	and	might	have	few	or	even	no	
              friends	at	all.	They	also	appreciate	their	privacy	so	they've	used	some	random	
              images	from	internet,	not	specifically	optimized	for	mobile	devices,	for	their	profile.	
              (They	are	very	modern	in	some	aspects	and	they	have	smartphones	and	access	to	
              internet	for	instance).
              Please	write	an	application	using	React	and	types
            </section>
            <section>
                <div>
                  Specifications:
                  <ul>
                    <li>Retrieve	data	from	the	URL	provided</li>
                    <li>Show	this	data	in	the	most	user-friendly	way	you	could	think.	Keep	in	mind	our	
                    heroes	will	be	quite	busy	dealing	with	Orcs,	so	  apps	have	to	be	really	simple	and	
                    easy	to	use.	At	least	would	be	good	to	quickly	  browse	(and	even	filter)	all	the	
                    individuals	and	be	able	to	see	the	details	of	each	  one.
                  </li>
                    <li>
                      Document	all	libraries	used	and	explain	the	reason	you’ve	used	that	library
                    </li>
                    <li>
                    Test	the	app:	add	the	most	important	test	you	think	it	is	needed.
                    </li>
                  </ul>

                </div>
                <br/>
                <div>
                  Bonus:
                  <ul>
                    <li>Be	creative!</li>
                    <li>
                    UI	must	not	blocked	by	network	connections	or	long	operations
                    </li>
                    <li>
                      Images	coming	from	network	cached	to	improve	performance
                    </li>
                    <li>
                    Error	handling
                    </li>
                    <li>
                    Avoid	using	third	party	libraries	for	basic	functionality	(we	want	to	see	you	know	
                    the	basics!)
                    </li>
                    <li>
                    Use	third	party	libraries	for	extended	functionality
                    </li>
                    <li>
                    Snappiness	&	responsiveness	over	sluggishness	&	idleness
                    </li>
                    <li>
                    Determine	gender	of	gnomes	(just	joking	on	this	one	but	feel	free	to	make	your	
                  guess)
                    </li>
                    <li>
                    Test	the	app
                    </li>

                  </ul>
                  <br/>

                </div>
            </section>
          </article>
        </section>
      </>
    )

}

export default withRouter(Landing)

