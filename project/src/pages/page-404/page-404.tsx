function Page404(): JSX.Element {
  const pageTitleStyle = {
    textAlign: 'center',
    fontSize: '3em',
    marginBottom: '1.25em'
  } as const;
  const pageTextStyle = {
    color: '#c9c0bb',
    fontSize: '1.25em',
  } as const;
  const mainLinkStyle = {
    width: 'fit-content',
    margin: '0 auto',
    padding: '0 2%'
  } as const;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Page Not Found</h2>
        <h2 className="page-title" style={pageTitleStyle}>Welcome to the 404 page!</h2>
        <p style={pageTextStyle}>
          Looks like you&apos;ve wandered into the zone of uncertainty. We can&apos;t say for sure what happened to this
          page, perhaps it got lost in intergalactic space or escaped to another reality.
        </p>
        <p style={pageTextStyle}>
          We&apos;ll try to find it, but in the meantime, we recommend checking out other sections of our streaming
          service. We guarantee there&apos;s plenty of interesting and exciting content that won&apos;t leave you
          indifferent.
        </p>
        <p style={pageTextStyle}>
          If you still want to find this page, we suggest checking your space coordinates or trying to catch it with
          teleportation. Good luck!
        </p>
        <a href="main.html" style={mainLinkStyle} className="logo__link">
          GO TO THE MAIN PAGE
        </a>
      </section>
    </div>
  );
}

export default Page404;
