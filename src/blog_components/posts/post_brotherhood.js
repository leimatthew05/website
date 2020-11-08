import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import Parallax from '../parallax';
import PostMenu from './post-menu';

class Post_brotherhood extends Component {
  render() {
    const items = {
      name : "blogpost",
      background: "linear-gradient(rgba(130, 14, 14, 1), rgba(39, 106, 193, 1), rgba(39, 106, 193, 1))",
      backgrounddepth: "-0.3",
      layers: [ 
      {image: require("../../public/static/blog/sparse_dots.svg"), depth: "-0.90", name: "layer1"},
      {image: require("../../public/static/blog/posts/brotherhood-1.svg"), depth: "-0.5",  name: "layer2"},
      ]
    }

    return (
    <div>
        <PostMenu/>
        <section id="blog-head">
            <Parallax items = {items}>
                <div className= "blog-namecard">
                    <Row>
                        <Col md={5} className= "blog-title">
                            <Fade bottom duration= {5000}>
                                <h1>On Brotherhood</h1>
                                <h2>What Over a Decade of Brotherhood has Taught Me</h2>
                                <h3><i>Posted by Jordan Lei 12.22.19</i></h3>
                            </Fade>
                        </Col>
                    </Row>
                </div>
            </Parallax>
        </section>
        <div className= "blog-container">
            <div className= "blog-post" style={{padding: "5%", backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
                <h3>
                    It's a Quiet Saturday Morning ... 
                </h3>
                <p>
                    My right cheek is firmly pressed into the pillow when I hear the door quietly creak 
                    open. I hear the pitter-patter of soft steps, followed by an excited whisper that 
                    I know all too well.
                </p>
                <p>
                    “Jordan!” I feel the mattress sink a little behind me as my little brother shuffles 
                    in next to me. He says my name in this particular way, the way he lingers on the turn 
                    between the “J” and “ordan” parts of my name, as if he’s saying “Jeeeordan”. It makes 
                    me smile.
                </p>
                <p>
                    “Mah-jooo,” I return. Only I get to call him that. Everyone else can wait in line 
                    to call him “Matthew”, but “Mah-joo”? That’s ours only. I guess it’s our little 
                    code. It’s a simple thing, really; some might even call it stupid, but I guess 
                    it’s one of the few things I have left from a simpler time.
                </p>
                <p>
                    Before Matthew was born, my parents did the sensible-parent-charade of asking me 
                    whether or not I wanted a baby brother. Mind you, at the time they asked me, my mom 
                    was already very clearly pregnant, and it wasn’t like they could just return him for 
                    a refund at WalMart if things didn’t quite work out, so of course I didn’t really 
                    have a say in the matter. Then again, I suppose it was nice of them to ask, in a 
                    well-it’s-happening-anyway-I-hope-you’re-not-mad way. If I recall correctly, I was 
                    pretty neutral on the matter, but I had a few concerns about the various horror 
                    stories I had heard about growing up with a little sibling. What if he takes my toys? 
                    What if he tattles on me? What if, what if, what if. Here’s the thing: in childhood, 
                    there are a lot of choices you get to make, but for a long and significant portion of 
                    it most of it only revolves around the people you hang out with. Of course, parents 
                    always had an indirect say in what you do, what activities you’re involved in, and 
                    final jurisdiction on whether or not sleepovers were allowed that night (if Mom says 
                    no, go ask Dad), but all in all, most of my free reign was over the people I 
                    could hang out with. But that simply isn’t the case in growing up with a brother.
                </p>
                <p>
                    All of a sudden, this new human being shows up in your life, and you're expected to 
                    take care of him, look after him, and be a good example, all while having no say
                    in the matter.
                </p>
                <p>
                    I remember very little from the time Matthew was born. All I remember was that I 
                    really liked the chicken soup they brought us in the hospital, and suddenly one day, 
                    this strange looking tiny human shows up out of nowhere. Tiny human is really too much 
                    credit; he looked more like a russet potato. He was born on Valentine’s Day, which my 
                    parents thought was romantic and endearing and me, well, not so much. I had the big-brother 
                    foresight of being vastly concerned about my brother being pushed around for having his 
                    birthday on a day that represented icky things like love. Oh well, at least it was easy 
                    to remember. They chose Matthew for his name, going with the whole biblical-naming scheme.
                </p>
                <p>
                    When I was in third grade, my teacher, Mrs. Schukart asked us to write some poems. I wrote one 
                    about Matthew. Although I’m a little fuzzy on the details, I remember saying something along 
                    the lines of “I don’t need Matthew to be rich, or famous, or the president. All I want is for 
                    him to be happy.” I never thought much of it, but apparently the parents who saw it in 
                    curriculum night were very impressed. I didn’t think it meant that much at the time. 
                    Being a big brother meant a lot of things, as my parents constantly reminded me. I had to 
                    be an example, a leader, a teacher, a guardian, all at once. It wasn’t always an easy thing 
                    to do. All of a sudden, our house was flooded with things catered towards toddler-related life. 
                    The attention I got from my parents slowly diminished, and it felt at times like I was traversing 
                    this weird and scary thing called childhood somewhat on my own. All while being the role model 
                    for a squishy, not yet fully-functioning toddler. Although I wouldn’t admit it out loud, and I 
                    can’t pinpoint an exact example, I think every big brother has felt moments of jealousy, 
                    frustration, and even anger towards the younger. Because being a big brother is just such a 
                    large role, such an important position, that there is no way I, even now- let alone then, could 
                    comprehend its immensity.
                </p>
                <p>
                    I remember the times when my friends would come over to my place to hang out and play Wii, which at 
                    the time, was the pinnacle of entertainment. My parents would sometimes throw in my little brother 
                    to hang out with us, and I remember being distinctly upset that we had to include him in our 
                    activities. Being six and a half years younger than I was, he had no way to compete with 
                    seasoned, well-trained Wii connoisseurs, so we usually just threw him a Wii controller 
                    that had no batteries in it so he could pretend he was playing. But being a big brother 
                    didn’t always involve me slighting my poor baby brother. When I was alone, without the 
                    company and influence of my peers, we spent days constructing intricate Lego structures 
                    and stacking little wooden train sets in ways that seemed to defy gravity. But once my 
                    friends arrived, I was gone.
                </p>
                <h3>
                    It's Easy for Me Now to Criticize Myself Back Then...
                </h3>
                <p>
                    but it really wasn’t just a simple thing. The big brother is expected to navigate 
                    the world alone, without the guidance of some older figure to show him the way. I 
                    had to carve out my own path, walk through the thorns and bristles, and traverse 
                    the unknown. Every path was the path least traveled, because there were no paths 
                    there in the first place. We moved constantly while I was little. When I was two, 
                    we moved from China to Canada, and later when I was six, over to Portland. I had 
                    been to so many schools, said my first hellos and last goodbyes to so many people, 
                    that by the time I was in third grade all I wanted to do was fit in. Matthew will 
                    never know that. He only knows a life after immigration, a life where both parents 
                    speak fluent English. A life where things change in predictable ways.
                </p>
                <p>
                    Things get even more complicated when you factor in the simple truth that, if only 
                    by proximity, it is inevitable that the older and younger brother get compared to 
                    one another on a consistent basis. If I had a dollar for every time someone 
                    mentioned the fact that my little brother and I look alike (as if it’s a surprise), 
                    I might be able to graduate Penn debt-free. But Jordan, you might say, 
                    he’s six-and-a-half-years younger than you. Shouldn’t he have much more 
                    to complain about? That might be true, but I don’t know. I think we all have 
                    our struggles. Matthew’s hugely talented, especially in art. One year, both he 
                    and I won best-in-state awards for various art competitions. Mine was the Federal 
                    Junior Duck Stamp Competition, and his was the Doodle4Google competition. I was 
                    happy for him, for sure, but my prize was a small certificate and a framed version 
                    of my original work. Matthew came home with this massive larger-than-life blown up 
                    version of his painting. And by massive, I mean it literally would not fit in the 
                    dorm I live in today. My parents hung it up in the foyer, so big and so blatantly 
                    obvious you couldn’t miss it if you tried. To this day, I think my piece is 
                    shelved away in some closet.
                </p>
                <p>
                    It wasn’t my parents’ fault. Matthew’s piece was vibrant, eye-catching, creative, 
                    and quite frankly, fantastic. My piece was, well, a duck. A freaking awesome duck, 
                    but a duck nonetheless. Although I now understand the importance of giving Matthew 
                    his spotlight, I have to admit that at the time, I was a little hurt. When I told 
                    my mom, she sat me down and told me something I’ll never forget.
                </p>
                <div className= "blog-image" style={{width: "100%", padding: "5%", float: "right", fontSize: "15px"}}>
                <img src= {require("../../public/static/blog/posts/matthew-doodle.jpg")} 
                style={{width: "100%"}}/>
                <i>I mean, come on, it's pretty great.</i>
                </div>
                <p>
                    “Jordan,” she said, in the voice I had come to know when a moral lesson was coming. 
                    “Do you know what my father told me about being a big sister to your uncle?” 
                    I didn’t want to hear it, but she kept going anyway. “He told me- here’s the 
                    thing. As an older sibling, you’re given so many gifts. You get to be the center 
                    of attention for the first years of your life. You’ve gotten our undivided attention, 
                    in a time when we were younger. We’re older now, Jordan, whether you like it or not. 
                    We don’t have the energy we once had. Remember when you were little, when we used to 
                    take you to the library every day?”
                </p>
                <p>
                    I sat there, quiet.
                </p>
                <p>
                    “We used to walk you to the library every. Single. Day. Matthew has never had that, 
                    and now that we’re both working, he probably never will. When you were little, I 
                    used to keep a journal of every little thing you did. We can’t do that anymore. 
                    And at the end of the day, Matthew gets six-and-a-half fewer years with us, 
                    six-and-a-half fewer years to spend with his parents than you do ...
                </p>
                <p>
                    So take care of him. Love him, because he will never have these gifts you were 
                    born with."
                </p>
                <p>
                    When my grandmother passed away a year earlier, I still remember what my little 
                    brother said. He tugged on my mother’s sleeve and said: “I wanted Grandma to live 
                    to see me grow as tall as Jordan. I wanted Grandma to see me grow up.” That was a 
                    gift I was given. A gift that Matthew will never know.
                </p>
                <p>
                    As older siblings, we are burdened with a seemingly impossible and singular task: 
                    to be the guardian angel for our little siblings. And we bear that burden 
                    unknowingly, one <i>did-not</i> and <i>did-too</i> at a time. We falter, fail, and get punished 
                    for undertaking a job better suited for saints than for people. We pave the path, 
                    set out the trail, get judged and judge in return, on the bitter and terrifying 
                    road to maturity. But all the same, I don’t think we give enough credit to the 
                    little ones. I certainly haven’t. I can still feel Matthew’s burning tears as he 
                    pressed his face against my chest after being scolded for not being as studious as 
                    I was. I can still feel his innocent sobs as he burrowed his head against my heart, 
                    trying to walk a path that wasn’t built for him, but that he was expected to 
                    undertake all the same. Oh, how we as older siblings wish that we had a path 
                    to follow, not knowing the true difficulty of following a path that was built 
                    by and for someone entirely different. My brother is constantly left in my wake. 
                    He’s always Matthew <i>“aren’t-you-Jordan’s-brother?”</i> Lei. For every boorish, crude 
                    step I take in finding my way to my own identity, Matthew treads lightly, choosing 
                    between the unknown or a path paved by footsteps in the shape of my feet. And not 
                    once, and I’ve been keeping track, not once has he complained about having me as a 
                    big brother. Not once has he complained about having to follow my path or questioned 
                    why he continues with extracurriculars I’ve done but aren’t suited for him. Not once.
                </p>
                <h3>
                    Before I Left for College, My Mom Told Me Something My Brother had Told Her...
                </h3>
                <p>
                    “It’s not fair that Jordan gets to leave,” he said, “Before I was born, he never knew 
                    how much it hurt not to have a brother around. Now I have to deal with a life without 
                    him here.”
                </p>
                <p>
                    And it’s true. It’s a burden I’ve never had to bear.
                </p>
                <p>
                    Here’s what I think. Little brothers don’t get enough credit. They don’t get 
                    enough credit for living a life where they’re constantly living in our wake. 
                    They don’t get enough credit for living a life where all they’ve ever known is a 
                    life where they’re a player in a two-player videogame. They live, love, and lose 
                    all the time, and yet, at the end of the day, you can always expect to fall into 
                    their arms when you come home. <i>Home.</i>
                </p>
                <h3>
                    So, Matthew...
                </h3>
                <p>
                    if you are reading this, whether it's today, tomorrow, or fifty years in the future,
                    I want to add to the conversation I started over eleven years ago when I wrote that 
                    poem in third grade. You’re still too young to understand, but I’m just starting to 
                    understand what it means to be a big brother. I’m still learning, and I don’t think 
                    I’ll ever truly know what it means to have older sibling as a lifelong occupation, 
                    but I guess I just wanted to check in and say this. You deserve the world. You deserve 
                    to live a life where you can be whoever the heck you want to be. You deserve to be someone 
                    who isn’t constantly compared to goes-to-Penn-and-also-does-art Jordan Lei. And only 
                    now, only now am I starting to realize something that you’ve always known- that there 
                    doesn’t exist a Jordan Lei without a Matthew Lei.
                </p>
                <p>
                    It’s true that we don’t get to choose our brothers. But we do get to grow, laugh, 
                    and change with them. We get to share tears and memories and all the things we 
                    cherish in life, and love, and loss. And I know that, at the end of it all, I 
                    couldn’t have chosen better myself.
                </p>
                <p>
                    Because when the daylight comes, and I hear those light footsteps approach, and we 
                    exchange our inside joke about stupid nicknames we came up with forever ago, there’s 
                    no one I would rather be.
                </p>
                <div className= "blog-image" style={{width: "100%", padding: "5%", float: "right", fontSize: "15px"}}>
                <img src= {require("../../public/static/blog/posts/matthew-jordan-4.jpg")} 
                style={{width: "100%"}}/>
                </div>
                <p>
                    From, <br/> Jordan Lei
                </p>
            </div>
        </div>
    </div>
    );
  }
}

export default Post_brotherhood;
