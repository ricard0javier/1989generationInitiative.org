import React from "react";

import SubHeader from './SubHeader';
import LinkButton from './LinkButton';

const ChaptersComponent = () => (
  <div className="container-fluid">
    <SubHeader pageName="Chapters"/>
    <div className="text">

      <h1>Chapters</h1>

      <p>
        Chapters are largely independent and can carry out their own projects – these can be of a creative, educational, or entrepreneurial nature. They infuse our visioning process with a more regional perspective and open the debate to a far larger number of potential contributors. While discussions concentrate around people under 40, the intergenerational element of the process will be retained and (we hope) strengthened through the participation of numerous new experts in various fields from across the continent.
      </p>

      <p>
        There are currently three fully established Chapters (Austria, Belgium, Slovakia) and two Chapters in the early stages (Portugal and Scotland), looking for passionate and entrepreneurial 89ers. Being a Chapter Member enables you to actively contribute to our policy-making, organise events, and help bridge the gap between Brussels, the member states, and their citizens.
      </p>

      <LinkButton href="http://goo.gl/forms/TjTRAzW79fP3MpQw2" text="Become a Member" faIconClass="fa fa-pencil"/>

      {/* London */}
      <h2>London HQ</h2>
      <img className="img-responsive" src="http://static.1989generationinitiative.org/images/landscape_london.png"/>
      <p>
        The Initiative's central hub of activity is located in London at the LSE's European Institute.
      </p>
      <div className="clearfix"></div>

      {/* Belgian */}
      <h2>Belgian Chapter</h2>
      <img className="img-responsive" src="http://static.1989generationinitiative.org/images/landscape_brussels.png"/>
      <p>
        The Belgian chapter is based in Brussels. As we are located at the heart of the EU, our activities have a strong focus on connecting with and influencing the EU institutions.
      </p>
      <p className="pull-right">
        <LinkButton href="https://www.facebook.com/1989GIBE/" text="Follow the Belgian C." faIconClass="fa fa-facebook-square"/>
      </p>
      <div className="clearfix"></div>

      {/* Austria */}
      <h2>Austrian Chapter</h2>
      <img className="img-responsive" src="http://static.1989generationinitiative.org/images/landscape_vienna.png"/>
      <p>
        The Austrian chapter is based in Vienna. So far our focus in Austria has been in the sphere of education, where we are actively seeking to contribute to greater understanding and appreciation of Europe.
      </p>
      <p className="pull-right">
        <LinkButton href="https://www.facebook.com/1989GIAT/" text="Follow the Austrian C." faIconClass="fa fa-facebook-square"/>
      </p>
      <div className="clearfix"></div>

      {/* Portugal */}
      <h2>Portuguese Chapter</h2>
      <img className="img-responsive" src="http://static.1989generationinitiative.org/images/landscape_lisbon.png"/>
      <p>
        The Portuguese chapter is based in Lisbon and still in the early stages.
      </p>
      <p className="pull-right">
        <LinkButton href="https://www.facebook.com/1989GIPT/" text="Follow the Portuguese C." faIconClass="fa fa-facebook-square"/>
      </p>
      <div className="clearfix"></div>

      {/* Slovakia */}
      <h2>Slovak Chapter</h2>
      <img className="img-responsive" src="http://static.1989generationinitiative.org/images/landscape_bratislava.png"/>
      <p>
        The Slovak chapter is based in Bratislava. In Slovakia we are taking a very hands on approach and partnering with multiple organisations to try and have a real impact on citizens' lives and improve it, e.g. by correcting national implementation of EU policies.
      </p>
      <p className="pull-right">
        <LinkButton href="https://www.facebook.com/1989generationinitiativeSK/" text="Follow the Slovak C." faIconClass="fa fa-facebook-square"/>
      </p>
      <div className="clearfix"></div>

      {/* Scotland */}
      <h2>Scottish Chapter</h2>
      <img className="img-responsive" src="http://static.1989generationinitiative.org/images/landscape_glasgow.png"/>
      <p>
        The Scottish Chapter is based in Glasgow and is in its early stages.
      </p>
      <p className="pull-right">
        <LinkButton href="https://www.facebook.com/1989GIAB/" text="Follow the Scottish C." faIconClass="fa fa-facebook-square"/>
      </p>
      <div className="clearfix"></div>

    </div>
  </div>
);

export default ChaptersComponent;
