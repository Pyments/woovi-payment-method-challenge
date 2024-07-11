function PageTitle({ title }: { title: string }) {
  return (
    <h1 style={{ fontFamily: "Nunito", fontSize: "24px", fontWeight: 800, textAlign: "center" }}>
      {title}
    </h1>
  );
}

export default PageTitle;
