Responsive React Comment Box built with the Bootstrap 5. Comment with avatar, nested comments, comment with reply, comment section, comment template, unread comments, comment form & more.

Check out [React Bootstrap Comments Documentation](https://mdbootstrap.com/docs/react/extended/comments/) for detailed instructions & even more examples.

## Basic example

![React Bootstrap 5 Comments](https://mdbootstrap.com/img/Marketing/github/comments/basic.png)

```js
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Basic() {
  return (
    <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
      <MDBRow className="justify-content-center">
        <MDBCol md="8" lg="6">
          <MDBCard
            className="shadow-0 border"
            style={{ backgroundColor: "#f0f2f5" }}
          >
            <MDBCardBody>
              <MDBInput wrapperClass="mb-4" placeholder="Type comment..." label="+ Add a note" />

              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Martha</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Johny</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0">4</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Mary Kate</p>
                    </div>
                    <div className="d-flex flex-row align-items-center text-primary">
                      <p className="small mb-0">Upvoted</p>
                      <MDBIcon
                        fas
                        icon="thumbs-up mx-2 fa-xs"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small mb-0">2</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Johny</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0"></p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

```


## How to use?

1. Download MDB React - free UI KIT

2. Choose your favourite customized component and click on the image

3. Copy & paste the code into your MDB project

[▶️ Subscribe to YouTube channel for web development tutorials & resources](https://www.youtube.com/MDBootstrap?sub_confirmation=1)

## More examples

[React Bootstrap Nested comments:
![React Bootstrap 5 Comments](https://mdbootstrap.com/img/Marketing/github/comments/nested.png)](https://mdbootstrap.com/docs/react/extended/comments/#section-2)

[React Bootstrap Simple comment card:
![React Bootstrap 5 Comments](https://mdbootstrap.com/img/Marketing/github/comments/simple.png)](https://mdbootstrap.com/docs/react/extended/comments/#section-3)

[React Bootstrap Recent comments:
![React Bootstrap 5 Comments](https://mdbootstrap.com/img/Marketing/github/comments/recent.png)](https://mdbootstrap.com/docs/react/extended/comments/#section-4)

[React Bootstrap Unread comments:
![React Bootstrap 5 Comments](https://mdbootstrap.com/img/Marketing/github/comments/unread.png)](https://mdbootstrap.com/docs/react/extended/comments/#section-5)

[React Bootstrap Comments within column:
![React Bootstrap 5 Comments](https://mdbootstrap.com/img/Marketing/github/comments/columns.png)](https://mdbootstrap.com/docs/react/extended/comments/#section-6)

[React Bootstrap Add a comment:
![React Bootstrap 5 Comments](https://mdbootstrap.com/img/Marketing/github/comments/add-comment.png)](https://mdbootstrap.com/docs/react/extended/comments/#section-7)

___

## More extended Bootstrap documentation

<ul>
<li><a href="https://mdbootstrap.com/docs/react/extended/textarea/">React textarea</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/media-object/">React media object</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/chat/">React chat</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/avatar/">React avatar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/profiles/">React profiles</a></li>
<li><a href="https://mdbootstrap.com/docs/react/forms/overview/">React forms</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/buttons/">React buttons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/cards/">React cards</a></li>
<li><a href="https://mdbootstrap.com/docs/react/content-styles/typography/">React typography</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/rating/">React rating</a></li>
</ul>
