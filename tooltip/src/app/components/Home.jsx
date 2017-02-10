import React from "react";
import Tooltip from "./Tooltip.jsx";
class Home extends React.Component {
    render() {
        return (
            <div>
                <p>The name <i>
                    <a href="https://en.wiktionary.org/wiki/Pakistan" title="wikt:Pakistan">
                        <Tooltip text="Pakistan">Pakistan</Tooltip>
                    </a></i> literally
    means "land of the pure" in
    <a ><Tooltip text="Urdu">Urdu</Tooltip></a>
                    and <a href="/wiki/Persian_language" title="">
                        <Tooltip text="Persian language">Persian</Tooltip>
                    </a>.
    It is a play on the word <i><a href="https://en.wiktionary.org/wiki/%D9%BE%D8%A7%DA%A9">
                        <Tooltip text="پاک">pāk</Tooltip>
                    </a></i>    meaning <i>pure</i> in
    <a >
                        <Tooltip text="Persian language">Persian</Tooltip>
                    </a> and <a href="/wiki/Pashto_language" >
                        <Tooltip text="Pashto language">Pashto</Tooltip>

                    </a>while the suffix <a href="/wiki/-stan">
                        <i>
                            <Tooltip text="-stān">-stān</Tooltip>

                        </i></a> is a Persian word meaning <i>place of</i>, cognate with the <a href="/wiki/Sanskrit">
                        <Tooltip text="Sanskrit">Sanskrit</Tooltip>

                    </a> word <i><a href="https://en.wiktionary.org/wiki/%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE%E0%A4%A8">
                            <Tooltip text="स्थान">sthāna</Tooltip>
                     
                    </a></i>    (<a href="/wiki/Devanagari">
                            <Tooltip text="Devanagari">Devanagari</Tooltip>
                         
                    </a>: <span lang="sa">स्थान</span> <span title="Representation in the International Phonetic Alphabet (IPA)"
                        className="IPA"><a href="/wiki/Help:IPA_for_Sanskrit" title="Help:IPA for Sanskrit">
                            <Tooltip text="Representation in the International Phonetic Alphabet (IPA)">IPA</Tooltip>
                        
                        </a></span>).
                           </p>
             
                </div>
        )
    }
}

export default Home;