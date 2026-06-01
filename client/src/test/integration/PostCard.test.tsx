import { fireEvent, render, screen } from "@testing-library/react";
import PostCard from "@/components/PostCard";

const mockPost = {
  id: 1,
  title: "Post Teste",
  body: "Conteúdo teste",
  liked: false,
};

describe("PostCard Integration", () => {
  test("should show alert when unauthenticated user clicks like", async () => {
    window.alert = jest.fn();

    render(
      <PostCard
        post={mockPost}
        isAuthenticated={false}
        onLike={jest.fn()}
      />
    );

    fireEvent.click(screen.getByText("Curtir"));

    expect(window.alert).toHaveBeenCalledWith(
      "Você precisa estar autenticado para curtir posts!"
    );
  });

  test("should change button state when authenticated user likes a post", async () => {
    render(
      <PostCard
        post={mockPost}
        isAuthenticated={true}
        onLike={jest.fn().mockResolvedValue(undefined)}
      />
    );

    fireEvent.click(screen.getByText("Curtir"));

    expect(await screen.findByText("Curtido")).toBeInTheDocument();
  });
});