tasks = []

def add_task(task):
    tasks.append(task)
    print(f"Added: {task}")

def remove_task(index):
    if 0 <= index < len(tasks):
        removed = tasks.pop(index)
        print(f"Removed: {removed}")
    else:
        print("Invalid index")

def show_tasks():
    if not tasks:
        print("No tasks yet")
    for i, t in enumerate(tasks):
        print(f"{i}: {t}")

def main():
    add_task("Buy groceries")
    add_task("Clean house")
    add_task("Write code")
    show_tasks()
    remove_task(1)
    show_tasks()

if __name__ == "__main__":
    main()
